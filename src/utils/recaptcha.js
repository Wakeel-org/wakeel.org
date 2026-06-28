const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// Waits for the reCAPTCHA script to be ready, then returns a v3 token.
// The `action` label groups submissions in the reCAPTCHA dashboard.
// Returns null if reCAPTCHA is unavailable (e.g. blocked by ad blocker) so
// forms degrade gracefully rather than breaking entirely.
export async function getRecaptchaToken(action = 'submit') {
  if (typeof window === 'undefined' || !window.grecaptcha || !SITE_KEY) {
    return null;
  }

  return new Promise((resolve) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}
