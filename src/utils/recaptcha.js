const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let scriptPromise = null;

// Lazily inject the reCAPTCHA v3 script the first time a token is requested,
// so it never loads during initial page render (major performance win — it is
// a heavy third-party script). It only loads when a user actually submits a form.
function loadRecaptcha() {
  if (typeof window === 'undefined' || !SITE_KEY) return Promise.resolve(null);
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.grecaptcha || null);
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
  return scriptPromise;
}

// Waits for the reCAPTCHA script (loading it on demand), then returns a v3 token.
// The `action` label groups submissions in the reCAPTCHA dashboard.
// Returns null if reCAPTCHA is unavailable (e.g. blocked by an ad blocker) so
// forms degrade gracefully rather than breaking entirely.
export async function getRecaptchaToken(action = 'submit') {
  if (typeof window === 'undefined' || !SITE_KEY) return null;

  const grecaptcha = await loadRecaptcha();
  if (!grecaptcha) return null;

  return new Promise((resolve) => {
    grecaptcha.ready(async () => {
      try {
        const token = await grecaptcha.execute(SITE_KEY, { action });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}
