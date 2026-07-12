const DISPOSABLE_DOMAINS = [
  'tempmail', 'throwaway', '10minutemail', 'guerrillamail', 'mailinator',
  'yopmail', 'trashmail', 'fakeinbox', 'sharklasers', 'grr.la', 'spam4.me',
  'dispostable', 'maildrop', 'tempr.email', 'discard.email', 'spamgourmet',
  'tempemail', 'getnada', 'mohmal', 'throwam', 'harakirimail', 'emailondeck',
  'fakemailgenerator', 'tempinbox', 'spamevader', 'getairmail', 'filzmail',
  'throwam.com', 'spamhereplease', 'mailnull', 'spamgoblin', 'jnxjn',
  'mailnesia', 'spambot', 'crapmail', 'trashmail', 'tempr', 'spam.la',
  'mytrashmail', 'discardmail', 'spamfree24', 'binkmail', 'inboxalias',
];

const SPAM_PATTERNS = [
  /https?:\/\//gi,
  /<[a-z][\s\S]*>/gi,
  /\[url=/gi,
  /viagra|cialis|casino|lottery|prize|winner|congratulations|earn money/gi,
  /click here|click below|free money|make money fast/gi,
  /\b(seo|backlink|adult content|xxx|porn)\b/gi,
  /\+\d{1,3}[\s-]?\d{5,}/g, // phone numbers in message body
];

export function validateEmail(email) {
  const trimmed = (email || '').trim();
  if (!trimmed) return 'Email is required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(trimmed)) return 'Please enter a valid email address';
  if (trimmed.length > 254) return 'Email address is too long';

  const domain = trimmed.toLowerCase().split('@')[1] || '';
  if (DISPOSABLE_DOMAINS.some(d => domain.includes(d))) {
    return 'Please use a valid personal or business email address';
  }

  if (isDotStuffedEmail(trimmed)) {
    return 'Please use a valid email address';
  }

  return null;
}

// Free providers where dot-stuffing is exploited to generate infinite unique addresses
const DOT_STUFFING_DOMAINS = ['gmail.com', 'googlemail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

// Detects the bot pattern of inserting dots throughout a Gmail/free-provider address
export function isDotStuffedEmail(email) {
  const lower = (email || '').toLowerCase().trim();
  const atIdx = lower.lastIndexOf('@');
  if (atIdx === -1) return false;

  const local = lower.slice(0, atIdx);
  const domain = lower.slice(atIdx + 1);

  if (!DOT_STUFFING_DOMAINS.includes(domain)) return false;

  const dots = (local.match(/\./g) || []).length;

  // Dot density > 20% of local part length (real users rarely exceed 1-2 dots)
  if (dots / local.length > 0.20) return true;

  // Local part ends with .{digits} (e.g. .46, .09, .252) — programmatic suffix
  if (/\.\d+$/.test(local)) return true;

  // 3+ single-character segments separated by dots (e.g. k.o.v.e)
  const singleCharSegments = local.split('.').filter(s => s.length === 1).length;
  if (singleCharSegments >= 3) return true;

  return false;
}

// Normalizes Gmail addresses for duplicate checking: removes dots from local part.
// Gmail ignores dots so ko.v.e@gmail.com === kove@gmail.com — same inbox, different string.
export function normalizeEmailForDedup(email) {
  const trimmed = (email || '').trim().toLowerCase();
  const atIdx = trimmed.lastIndexOf('@');
  if (atIdx === -1) return trimmed;

  const local = trimmed.slice(0, atIdx);
  const domain = trimmed.slice(atIdx + 1);

  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    return local.replace(/\./g, '') + '@' + domain;
  }

  return trimmed;
}

// Detects random-string gibberish in name/message fields.
// Catches bots that submit values like "UoeYrkMnqGWAirYK" or "bPpLquzumPUGGwxigzF".
export function isGibberishText(text) {
  if (!text) return false;
  const t = text.trim();
  if (t.length < 8) return false;

  // No spaces + long + many randomly-placed uppercase letters = random string
  if (!t.includes(' ') && t.length > 14) {
    const uppercaseAfterFirst = (t.slice(1).match(/[A-Z]/g) || []).length;
    if (uppercaseAfterFirst >= 4) return true;
  }

  return false;
}

export function checkSpamContent(text) {
  if (!text) return null;
  if (SPAM_PATTERNS.some(pattern => pattern.test(text))) {
    return 'Your submission contains prohibited content';
  }
  return null;
}

// Returns true if the honeypot field was filled (bot detected)
export function isHoneypotFilled(value) {
  return typeof value === 'string' && value.length > 0;
}

// Returns true if form was submitted too fast (bot detected)
export function isTooFast(startTimeMs, minimumMs = 3000) {
  return Date.now() - startTimeMs < minimumMs;
}

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// Returns true if the user is rate-limited, false otherwise (and records the attempt)
export function isRateLimited(formKey) {
  try {
    const key = `wakeel_rl_${formKey}`;
    const now = Date.now();
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const recent = stored.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

    if (recent.length >= RATE_LIMIT_MAX) return true;

    recent.push(now);
    localStorage.setItem(key, JSON.stringify(recent));
    return false;
  } catch {
    return false;
  }
}
