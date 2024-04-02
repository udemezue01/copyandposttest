import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    width: '400px',
    height: '500px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const About = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={6} direction={isMd ? 'row' : 'column'}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image
            src="https://landing.copyandpost.com/wp-content/uploads/2021/04/logo-tan-1.svg"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
        <Grid item container xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title={
              <span>
                Don’t just know your market, know your marketing with Copy and
                Post.{' '}
              </span>
            }
            // subtitle={
            //   <span>
            //     There are companies out there providing similar services, but
            //     <Typography variant="inherit" component="span" color="primary">
            //       {' '}
            //       copyandpost.com{' '}
            //     </Typography>
            //     is different.
            //   </span>
            // }
            align="left"
            disableGutter
          />
          <List disablePadding>
            {data.map((item: any, index: number) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <IconAlternate
                    size="small"
                    fontIconClass={item.icon}
                    color={colors.blueGrey}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h6">{item.title}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
