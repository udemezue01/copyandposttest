/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { getBlogPosts, getBlogPostBySlug } from '../../lib/api';

const BlogArticlePage = ({ post }): JSX.Element => {
  return (
    <WithLayout component={() => <BlogArticle post={post} />} layout={Main} />
  );
};

export default BlogArticlePage;

export async function getStaticProps(context) {
  const post = await getBlogPostBySlug(context.params.slug);
  return {
    props: {
      ...post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.posts.edges.map(post => {
    return {
      params: {
        slug: post.node.slug,
      },
    };
  });

  return { paths, fallback: false };
}
