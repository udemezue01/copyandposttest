import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';
import { formatDate } from '../../../utils';

import { content, sidebarArticles, similarStories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.copyandpost.tan,
  },
}));

const BlogArticle = ({ post }): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        cover={{ src: post.featuredImage?.node?.mediaItemUrl }}
        title={post.title}
        // subtitle={content.subtitle}
        author={{
          name: 'copyandpost',
          date: formatDate(post.date),
          photo: { src: post?.author?.node?.avatar?.url },
        }}
      />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Content testData={post.content} data={content} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      {/* <SectionAlternate>
        <SimilarStories data={similarStories} />
      </SectionAlternate>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate> */}
    </div>
  );
};

export default BlogArticle;
