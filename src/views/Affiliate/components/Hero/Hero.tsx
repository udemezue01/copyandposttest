import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'url(https://landing.copyandpost.com/wp-content/uploads/2021/04/logo-tan-1.svg) no-repeat',
    backgroundPosition: '-100px 200px',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.alternate.main,
    [theme.breakpoints.down('xs')]: {
      background: 'none',
    },
  },
  cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  buttonWhite: {
    background: '#FFF',
  },
  buttonGreen: {
    background: theme.palette.copyandpost.green,
  },
}));

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title="Where affiliate marketing and social media collide."
            subtitle="Welcome to the Copy and Post Affiliate Program, where affiliate marketing and social media collide to create a powerful and lucrative partnership."
            subtitleColor="textPrimary"
            ctaGroup={[
              <div className={classes.buttonGroup}>
                <a href="https://copyandpost.tapfiliate.com" target="_blank">
                  <Button
                    className={classes.buttonGreen}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Start Earning
                  </Button>
                </a>
                <a
                  href="https://copyandpost.tapfiliate.com/login"
                  target="_blank"
                >
                  <Button
                    className={classes.buttonWhite}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Already An Affiliate
                  </Button>
                </a>
              </div>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src="https://landing.copyandpost.com/wp-content/uploads/2023/04/clay-banks-JPhVGeY4H7I-unsplash-scaled.jpg"
              srcSet="https://landing.copyandpost.com/wp-content/uploads/2023/04/clay-banks-JPhVGeY4H7I-unsplash-scaled.jpg"
              className={classes.image}
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        }
      />
    </div>
  );
};

export default Hero;
