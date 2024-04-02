/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ComingSoon from 'views/ComingSoon';
import IndexView from 'views/IndexView';
import Main from 'layouts/Main';
import Blank from 'layouts/Blank';
import WithLayout from 'WithLayout';
import { getHomepageSections } from '../lib/api';
import Head from 'next/head';
import Script from 'next/script';

const IndexPage = ({ homepageSections }): JSX.Element => {
  return (
    <>
      <Script
        data-website-uuid="7fc0f9b5-5582-4781-9817-2caa439b1b67"
        data-auto-block="on"
        src="https://app.termly.io/embed.min.js"
      />
      <Script>
        {`
          (function(t,a,p){t.TapfiliateObject=a;t[a]=t[a]||function(){
          (t[a].q=t[a].q||[]).push(arguments)}})(window,'tap');
          tap('create', '39723-3bb1d3', { integration: "stripe" });
          tap('detect');
        `}
      </Script>
      <Head>
        <title>
          Copy and Post - Easy to Apply Social Media Posts For REALTORS®
        </title>
        <meta
          property="og:title"
          content="Copy and Post - Easy to Apply
          Social Media Posts
          For REALTORS®"
          key="Copy and Post"
        />
      </Head>
      <WithLayout
        // component={ComingSoon}
        component={props => (
          <IndexView themeMode={props.themeMode} data={homepageSections} />
        )}
        // layout={Blank}
        layout={Main}
      />
    </>
  );
};

export default IndexPage;

export async function getStaticProps(context) {
  const homepageSections = await getHomepageSections();
  return {
    props: {
      ...homepageSections,
    },
  };
}
