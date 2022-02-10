import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { FeatureHeader } from '../src/feature-header';
import Router from 'next/router';
import { Loader } from '../src/component';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log('route is changing');
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('Route change is complete');
    setLoading(false);
  });
  return (
    <>
      <FeatureHeader />
      {loading && <Loader loaderStyle='page-loader' />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
