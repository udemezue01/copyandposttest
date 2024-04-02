import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50,
  },
}));

const Partners = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Typography>INTEGRATIONS</Typography>
          <SectionHeader
            title="Partnered with all major platforms"
            subtitle="Connect your social profiles and simply “Copy and Post” immediately or schedule in advance by using our user-friendly content calendar."
            align="left"
            ctaGroup={[
              <LearnMoreLink
                title="Join For Free and See"
                onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                variant="h6"
              />,
            ]}
            disableGutter
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item: any, index: number) => (
              <Grid item xs={6} key={index}>
                <CardBase withShadow liftUp>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Partners;
