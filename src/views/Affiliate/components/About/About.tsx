import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  card: {
    '& .MuiCardContent-root': {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-12),
      '& .MuiCardContent-root': {
        padding: theme.spacing(11, 5),
      },
    },
  },
  cardTitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  avatar: {
    width: 100,
    height: 100,
    boxShadow: '5px 11px 20px 0px rgba(0, 0, 0, 0.25)',
  },
  listItemAvatar: {
    marginRight: theme.spacing(4),
  },
}));

const About = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container alignItems="center" xs={12} md={12}>
          <SectionHeader
            title={
              <span className={classes.textWhite}>
                Check out the Fine-Print and the Nitty-Gritty of our Affiliate
                Program
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>
                We know the fine print can be daunting, but we promise it's
                worth it! Our Affiliate Program Agreement outlines all the
                nitty-gritty details of our program, including commission rates,
                payment terms, and prohibited activities. As a responsible
                affiliate, it's important to be familiar with our guidelines and
                expectations. So, take a few minutes to review the agreement and
                get ready to start earning with Copy and Post!
              </span>
            }
            subtitleVariant="body1"
            data-aos="fade-up"
            align="left"
            ctaGroup={[
              <a
                href="https://landing.copyandpost.com/wp-content/uploads/2023/05/Copy-and-Post-Affiliate-Program-Agreement.pdf"
                target="_blank"
              >
                <Button variant="contained" size="large">
                  View Affiliate Program Agreement
                </Button>
              </a>,
            ]}
          />
        </Grid>
        {/* <Grid
          item
          container
          justify={isMd ? 'flex-start' : 'center'}
          xs={12}
          md={6}
        >
          <CardBase withShadow liftUp align="left" className={classes.card}>
            <>
              <Typography className={classes.cardTitle} variant="h6">
                American Standards And European Culture How To Avoid A
                Disappointing Vacation Experience While Traveling In Europe
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg"
                      srcSet="https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"
                      alt="Jack Smith"
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Jack Smith"
                    secondary="Creative Director at Johnson"
                  />
                </ListItem>
              </List>
            </>
          </CardBase>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default About;
