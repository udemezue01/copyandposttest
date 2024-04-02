/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import About from 'views/About';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from 'next/head';

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Copy and Post - About Us</title>
        <meta
          property="og:title"
          content="Copy and Post - About Us"
          key="title"
        />
      </Head>
      <WithLayout component={About} layout={Main} />
    </>
  );
};

export default AboutPage;
