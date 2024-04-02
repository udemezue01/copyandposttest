import React from 'react';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { useAuth0 } from '@auth0/auth0-react';

const Callouts = ({
  data,
  className,
  testData,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const { loginWithRedirect } = useAuth0();
  const { iconone, icontwo, iconthree, iconfour, iconfive, iconsix } = testData;

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader title="More features" fadeUp />
      <Grid container spacing={4}>
        {[iconone, icontwo, iconthree, iconfour, iconfive, iconsix].map(
          (item: any, index: number) => (
            <Grid
              key={index}
              item
              container
              alignItems="center"
              direction="column"
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-up"
            >
              <CardBase liftUp variant="outlined" withShadow>
                <DescriptionListIcon
                  icon={
                    <IconAlternate
                      fontIconClass={item.icon}
                      color={colors.blueGrey}
                    />
                  }
                  title={item.title}
                  subtitle={item.description}
                />
              </CardBase>
            </Grid>
          ),
        )}
        <Grid item container xs={12} justify="center">
          {/* <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Free Trial Coming Soon!
            </Button> */}
          <Button
            onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            variant="contained"
            size="large"
            color="primary"
            title="Start Your Free Trial"
            aria-label={'Start Your Free Trial'}
            id="start-free-trial"
            type="button"
          >
            Start Your Free Trial
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Callouts;
