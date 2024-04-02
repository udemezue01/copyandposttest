/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import TagManager from 'react-gtm-module';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NLFWW44' });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Copy and Post - For REALTORS®, By REALTORS®</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
