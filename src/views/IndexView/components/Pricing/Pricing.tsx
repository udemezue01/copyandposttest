import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { LearnMoreLink, Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';
import { useAuth0 } from '@auth0/auth0-react';

const Pricing = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={className} {...rest}>
      {/* <SectionHeader
        title="Simple pricing"
        subtitle="A pay-once license, just for you."
        ctaGroup={[
          <LearnMoreLink title="See what's included" href="#" variant="h6" />,
        ]}
        data-aos="fade-up"
      /> */}
      {data.map((item: any, index: number) => (
        <CardPricingStandard
          variant="outlined"
          withShadow={item.isHighlighted ? true : false}
          title={item.title}
          liftUp
          subtitle={item.subtitle}
          priceComponent={
            <div>
              <Typography variant="h3" component="span">
                {item.price}
              </Typography>
              <Typography component="span" variant="subtitle1">
                {item.priceSuffix}
              </Typography>
            </div>
          }
          features={item.features}
          featureCheckComponent={
            <Icon
              fontIconClass="far fa-check-circle"
              fontIconColor={theme.palette.primary.main}
            />
          }
          cta={
            <Button
              color="primary"
              variant={item.isHighlighted ? 'contained' : 'outlined'}
              fullWidth
              size="large"
              onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            >
              Subscribe now
            </Button>
          }
          disclaimer={item.disclaimer}
        />
      ))}
    </div>
  );
};

export default Pricing;
