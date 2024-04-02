/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactPageCover from 'views/ContactPageCover';
import Main from 'layouts/Main';
import Head from 'next/head';
import WithLayout from 'WithLayout';

const ContactCoverPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Copy and Post - Contact Us</title>
        <meta
          property="og:title"
          content="Copy and Post - Contact Us"
          key="Copy and Post"
        />
      </Head>
      <WithLayout component={ContactPageCover} layout={Main} />;
    </>
  );
};

export default ContactCoverPage;
