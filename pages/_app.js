import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// Note: reCAPTCHA is no longer loaded here on every page. It is injected
// on demand from src/utils/recaptcha.js the first time a form is submitted,
// which keeps it off the critical render path.
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={spaceGrotesk.variable}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp; 