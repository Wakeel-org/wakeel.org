import { Space_Grotesk } from 'next/font/google';
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
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp; 