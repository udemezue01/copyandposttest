import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { Section, HeroBackground } from 'components/organisms';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  video: {
    height: 324,
    maxWidth: 600,
    margin: '0 auto',
  },
  iframe: {
    display: 'block',
  },
}));

const Video = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroBackground
        backgroundImg="https://landing.copyandpost.com/wp-content/uploads/2022/03/video-background-2.png"
        backgroundPosition="center center"
        backgroundColor={'#1f6a5c'}
      >
        <Section narrow disablePadding>
          <>
            <SectionHeader
              title={
                <span className={classes.textWhite}>Get An Inside Look</span>
              }
              subtitle={
                <span className={classes.textWhite}>
                  Of the most personalized marketing dashboard ever made for
                  real estate professionals, mortgage lenders and property
                  managers.
                </span>
              }
              data-aos="fade-up"
            />
            <Box>
              <p>
                <iframe
                  className={classes.iframe}
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/85jqCeyw9to?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </p>
            </Box>
            {/* <HeroBackground
              backgroundImg="https://assets.maccarianagency.com/the-front/photos/logistics/cover@2x.png"
              backgroundPosition="center center"
              disbaleCoverOpacity
              className={classes.video}
              data-aos="fade-up"
            >
              <IconAlternate
                fontIconClass="fas fa-play"
                color={colors.grey}
                shape="circle"
              />
            </HeroBackground> */}
          </>
        </Section>
      </HeroBackground>
    </div>
  );
};

export default Video;
