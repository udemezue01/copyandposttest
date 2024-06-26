import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Typography,
  GridList,
  GridListTile,
  IconButton,
  Link,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'inline-block',
    marginRight: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

const Content = ({
  data,
  className,
  testData,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <div className={classes.section}>
        <Typography component="div" variant="h6" color="textPrimary">
          <span dangerouslySetInnerHTML={{ __html: testData }} />
        </Typography>
      </div>
      {/* <div className={classes.section}>
        <Image
          {...data.cover}
          className={classes.image}
          lazyProps={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h4" color="primary" align="center">
          "{data.quote}"
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          {data.text1}
        </Typography>
      </div>
      <div className={classes.section}>
        <GridList
          cellHeight={isMd ? 360 : 260}
          cols={2}
          spacing={isMd ? 24 : 8}
        >
          {data.images.map((item: any, index: number) => (
            <GridListTile key={index} cols={isMd ? item.cols : 2}>
              <Image
                {...item}
                className={classes.image}
                lazyProps={{ width: '100%', height: '100%' }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          {data.text2}
        </Typography>
      </div> */}
      <div>
        <Link
          className={classes.link}
          href="https://www.facebook.com/Copy-and-Post-108089064654997"
          target="_blank"
        >
          <IconButton className={classes.socialIcon}>
            <FacebookIcon />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/copyandpostit/" target="_blank">
          <IconButton className={classes.socialIcon}>
            <InstagramIcon />
          </IconButton>
        </Link>
        {/* <IconButton className={classes.socialIcon}>
          <TwitterIcon />
        </IconButton>
        <IconButton className={classes.socialIcon}>
          <PinterestIcon />
        </IconButton> */}
      </div>
    </div>
  );
};

export default Content;
