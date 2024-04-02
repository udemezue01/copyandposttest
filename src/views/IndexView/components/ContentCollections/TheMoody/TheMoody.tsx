import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const TheMoody = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>THE MOODY</span>}
        titleVariant="h4"
        subtitle={<span className={classes.textWhite}>Collection</span>}
        // ctaGroup={[
        //   <Button variant="outlined" color="secondary" size="large">
        //     See portfolio
        //   </Button>,
        // ]}
        disableGutter
        data-aos="fade-up"
        titleStyles={{ fontSize: '5.9983rem' }}
      />
    </div>
  );
};

export default TheMoody;
