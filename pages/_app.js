import { Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={spaceGrotesk.variable}>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp; 