import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  useMediaQuery,
  Grid,
  Button,
  Typography,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';
import InfoBox from './InfoBox';

const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 120,
  },
}));

const EarnStats = ({
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
      <SectionHeader
        // overline={
        //   <Image
        //     src="https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png"
        //     alt="rating"
        //     className={classes.sectionHeadlineStars}
        //     width="auto"
        //   />
        // }
        title={'Start earning today!'}
        subtitle="Remember, these are just examples and your actual earnings will depend on the number of customers you refer and their subscription status. But with our generous 25% recurring commission, the potential for earning extra income is definitely worth exploring."
        align="center"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={4}
            data-aos="fade-up"
          >
            <InfoBox
              variant="outlined"
              text={review.feedback}
              icon={review.icon}
              number={review.number}
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <a href="https://copyandpost.tapfiliate.com" target="_blank">
            <Button variant="outlined" size={'large'}>
              Sign Up Today
            </Button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default EarnStats;
