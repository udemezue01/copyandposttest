import React from 'react';
import { Button } from '@material-ui/core';
import { getBlogPosts } from '../../../../lib/api';

const LoadMore = ({ allPosts, setallPosts, pageInfo }) => {
  const handleOnclick = async event => {
    const morePosts = await getBlogPosts(pageInfo.endCursor);

    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };
    updatedPosts.pageInfo = morePosts.pageInfo;

    allPosts.map(node => {
      updatedPosts.nodes.push(node);
    });

    morePosts.posts.edges.map(node => {
      updatedPosts.nodes.push(node);
    });

    setallPosts(updatedPosts.nodes);
  };
  return (
    <>
      <Button
        onClick={handleOnclick}
        variant="contained"
        size="large"
        color="primary"
      >
        Load More
      </Button>
    </>
  );
};

export default LoadMore;
