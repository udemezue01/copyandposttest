import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Story = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Hi! My name is Kristen Hicks"
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
            <Typography component="p" variant="h6" color="textPrimary">
              I’m a licensed REALTOR®, owner of a social media company and
              founder of CopyandPost.com. By combining my skill sets and
              passion, we created a platform that many professionals could
              benefit from. One that combines style, personalization and
              technology, with the focus on reaching more clients through
              marketing. Plus, a portion of every membership goes back to the
              communities we serve.
            </Typography>
            <br />
            <Typography component="p" variant="h6" color="textPrimary">
              Nothing great is achieved alone! Copy and Post LLC is made up of
              REALTORS®, stay-at-home moms, creative individuals and brilliant
              IT developers. We give God all the glory for the skills he has
              given us, the connections he continues to develop and the
              opportunity to see people thrive.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://landing.copyandpost.com/wp-content/uploads/2021/04/about2.jpg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Story;
