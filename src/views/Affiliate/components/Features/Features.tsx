import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, colors } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

const Features = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Earn passive income with our recurring commission affiliate program."
        subtitle="As an Affiliate, you will have the opportunity to earn a 25% recurring commission on every sale."
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <CardBase liftUp noShadow variant="outlined">
              <DescriptionListIcon
                icon={
                  <Icon
                    size="large"
                    fontIconClass={item.icon}
                    fontIconColor={'#1f6a5c'}
                  />
                }
                title={item.title}
                subtitle={item.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
