/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogSearch from 'views/BlogSearch';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from 'next/head';
import { getBlogPosts } from '../../lib/api';

const BlogPage = ({ posts }): JSX.Element => {
  return (
    <>
      {' '}
      <Head>
        <title>Copy and Post - Blog</title>
        <meta
          property="og:title"
          content="Copy and Post - Blog"
          key="Copy and Post"
        />
      </Head>
      <WithLayout
        component={() => <BlogSearch posts={posts} />}
        layout={Main}
      />
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = await getBlogPosts();

  return {
    props: {
      ...posts,
    },
  };
}
