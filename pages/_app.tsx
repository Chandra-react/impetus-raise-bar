import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FeatureHeader } from '../src/feature-header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FeatureHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
