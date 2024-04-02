import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 0,
    background: 'transparent',
  },
  descriptionListIcon: {
    '& .description-list-icon__title, & .description-list-icon__subtitle': {
      color: 'white',
    },
  },
}));

const Integrations = ({
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
        title={''}
        subtitle={
          <span>
            As an Affiliate, you will have the opportunity to earn a{' '}
            <b>25% recurring commission on every sale</b> generated through your
            unique referral link or coupon code. With our program, you can
            leverage your social media presence and marketing skills to promote
            our innovative social media marketing platform and earn substantial
            recurring commissions.
            <br />
            <br />
            Whether you are a social media influencer, blogger, member or online
            marketer, our Affiliate Program offers an exciting opportunity to
            monetize your audience and grow your income stream.
            <br />
            <br />
            Review our step-by-step process of becoming an Affiliate and how to
            maximize your earnings with our program. So, let's get started!
          </span>
        }
        data-aos="fade-up"
      />
      {/* <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            md={4}
            data-aos={'fade-up'}
          >
            <DescriptionListIcon
              icon={
                <Avatar className={classes.avatar}>
                  <Image src={item.logo} alt={item.name} />
                </Avatar>
              }
              title={item.name}
              subtitle={item.title}
              className={classes.descriptionListIcon}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default Integrations;
