import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb, Newsletter, Result, Hero } from './components';

import { breadcrumb, result } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const BlogSearch = ({ posts }): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      {posts && (
        <div className={classes.root}>
          <Hero />
          <Result pageInfo={posts.pageInfo} posts={posts.edges} data={result} />
          {/* <Section>
          <Newsletter />
        </Section> */}

          <Divider />
        </div>
      )}
    </>
  );
};

export default BlogSearch;
