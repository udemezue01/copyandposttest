import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import {
  colors,
  useMediaQuery,
  Grid,
  Typography,
  Button,
  NoSsr,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
  signUpButton: {
    fontSize: '1.2rem',
  },
  btnCta: {
    paddingTop: '2rem',
    textAlign: 'center',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  cta: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
  },
  featureItems: {
    width: '100%',
    height: '100%',
    background:
      'url(https://landing.copyandpost.com/wp-content/uploads/2021/04/logo-tan-1.svg) no-repeat top center',
    backgroundSize: 'contain',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  gridItemPositioned: {
    marginTop: '25%',
  },
  iconCover: {
    width: 60,
    height: 60,
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/bgicon.svg) no-repeat center center',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.indigo[500],
    fontSize: 35,
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
      fontSize: 50,
    },
  },
  propsGrid: {
    height: '100%',
  },
}));

const Features = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, properties } = data;
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className={className} {...rest}>
        <Typography>FEATURES</Typography>
        <SectionHeader
          title="Style It. Copy It. Post It."
          subtitle="Join the most PERSONALIZED marketing platform available to REALTORS® and mortgage professionals today! Curated a MONTH in advance so you can spend more time creating connections and closing deals!"
          align="left"
          disableGutter
        />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={12} data-aos="fade-up">
            <div className={classes.featureItems}>
              <Grid container spacing={isMd ? 4 : 1}>
                <Grid item xs={6}>
                  <Grid container spacing={isMd ? 4 : 1} direction="column">
                    {items.slice(0, 2).map((item: any, index: number) => (
                      <Grid item xs={12} key={index} data-aos="fade-up">
                        <CardBase withShadow liftUp>
                          <DescriptionListIcon
                            align="left"
                            icon={
                              <div className={classes.iconCover}>
                                <NoSsr>
                                  <i className={item.icon} />
                                </NoSsr>
                              </div>
                            }
                            title={item.title}
                            subtitle={item.subtitle}
                          />
                        </CardBase>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={6} className={classes.gridItemPositioned}>
                  <Grid container spacing={isMd ? 4 : 1} direction="column">
                    {items
                      .slice(items.length - 2, items.length)
                      .map((item: any, index: number) => (
                        <Grid item xs={12} key={index} data-aos="fade-up">
                          <CardBase withShadow liftUp>
                            <DescriptionListIcon
                              align="left"
                              icon={
                                <div className={classes.iconCover}>
                                  <NoSsr>
                                    <i className={item.icon} />
                                  </NoSsr>
                                </div>
                              }
                              title={item.title}
                              subtitle={item.subtitle}
                            />
                          </CardBase>
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Section paddingSmall flexCenter>
          <Button
            className={classes.signUpButton}
            title="What are you waiting for?"
            aria-label={'What are you waiting for?'}
            id="start-free-trial"
            type="button"
            size="large"
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
          >
            What are you waiting for?
          </Button>
        </Section>
      </div>
    </>
  );
};

export default Features;
