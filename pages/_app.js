import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../styles/globals.css';

// Kitab Edition v1.0 type system: Space Grotesk for display/headings,
// Inter for body/UI copy, JetBrains Mono for labels, stamps, and metadata.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Note: reCAPTCHA is no longer loaded here on every page. It is injected
// on demand from src/utils/recaptcha.js the first time a form is submitted,
// which keeps it off the critical render path.
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp; 