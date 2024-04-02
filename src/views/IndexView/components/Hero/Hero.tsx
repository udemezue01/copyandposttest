import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, useTheme } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  typedText: {
    fontWeight: 900,
    color: theme.palette.copyandpost.tan,
  },
  red: {
    background: theme.palette.copyandpost.tan,
    color: '#FFF',
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    },
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url("https://landing.copyandpost.com/wp-content/uploads/2021/04/homepage-slider-template-1.png")`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-10%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    },
  },
  imageAnimationDark: {
    background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png")`,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({
  themeMode = 'light',
  className,
  data,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const heading = data.heading;
  const subHeading = data.subtitle;
  const animatedWords = data.animatedwords.split(',');
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();

  const title = (
    <Typography variant="h3" component="span" className={classes.fontWeight900}>
      Easy to Apply
      <br />
      Social Media Posts
      <br />
      For REALTORS® that are
      <br />
      <TypedText
        component="span"
        variant="h3"
        className={classes.typedText}
        typedProps={{
          strings: animatedWords,
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const freeTrialButton = (
    <Button
      title="Start Your Free Trial"
      aria-label={'Start Your Free Trial'}
      id="start-free-trial"
      type="button"
      size="large"
      variant="contained"
      color="primary"
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      Start Your Free Trial
    </Button>
  );

  const comingSoonButton = (
    <Button variant="contained" color="primary" size="large">
      Free Trial Coming Soon!
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subHeading}
      align="left"
      titleProps={{
        variant: 'h1',
        color: 'textPrimary',
      }}
      titleStyles={{ lineHeight: 0.54 }}
      ctaGroup={[freeTrialButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === 'dark' ? classes.imageAnimationDark : '',
            )}
          />
        }
      />
    </div>
  );
};

export default Hero;
