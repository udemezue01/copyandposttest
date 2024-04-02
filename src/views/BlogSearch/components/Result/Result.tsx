import React from 'react';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  colors,
  useMediaQuery,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Avatar,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import { Icon, Image } from 'components/atoms';
import { CardProduct, Section, SectionAlternate } from 'components/organisms';
import { formatDate } from '../../../../../utils';
import { LoadMore } from 'components/molecules';

import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  link: {
    cursor: 'pointer',
  },
  pagePaddingTop: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  sectionAlternate: {
    '& .section-alternate__content': {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },
    },
  },
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 420,
    },
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 300,
  },
}));

const Result = ({
  data,
  className,
  posts,
  pageInfo,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const [allPosts, setallPosts] = useState(posts);

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = (props: ImageProps) => {
    return (
      <Image
        {...props}
        src={props?.node?.featuredImage?.node?.mediaItemUrl}
        className={classes.image}
        lazyProps={{ width: '100%', height: '100%' }}
      />
    );
  };

  const BlogContent = (props: any) => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar {...props.author.photo} className={classes.avatar} />
          <Typography variant="body2" color="textPrimary">
            {props.author}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.date}
        </Typography>
      </div>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <SectionAlternate className={classes.sectionAlternate}>
        <Grid container spacing={isMd ? 4 : 2}>
          {allPosts.map((post: any, index: number) => (
            <Grid
              className={classes.link}
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
            >
              <Link legacyBehavior href={`/blog/${post.node.slug}`}>
                <CardProduct
                  withShadow
                  liftUp
                  className={classes.cardProduct}
                  mediaContent={
                    <BlogMediaContent {...post} alt={post.node.title} />
                  }
                  cardContent={
                    <BlogContent
                      title={post.node.title}
                      // subtitle={item.subtitle}
                      author={'copyandpost'}
                      date={formatDate(post.node.date)}
                    />
                  }
                />
              </Link>
            </Grid>
          ))}
          {/* <Grid item xs={12} container justify="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Load more
            </Button>
          </Grid> */}
        </Grid>
      </SectionAlternate>
      <Section paddingSmall display="flex" flexCenter>
        <LoadMore
          allPosts={allPosts}
          setallPosts={setallPosts}
          pageInfo={pageInfo}
        />
      </Section>
    </div>
  );
};

export default Result;
