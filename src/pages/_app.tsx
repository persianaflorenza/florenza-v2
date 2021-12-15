import '@src/styles/globals.css';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://persianasflorenza.com.br${router.route}`;

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <GlobalStyles />
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  );
}

export default MyApp;
