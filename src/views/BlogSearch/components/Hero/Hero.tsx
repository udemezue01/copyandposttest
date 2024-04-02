import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    minHeight: 300,
    maxHeight: 300,
    background: `url(https://landing.copyandpost.com/wp-content/uploads/2021/04/2.png) no-repeat center ${colors.blueGrey[200]}`,
    backgroundSize: 'cover',
    backgroundPosition: '10% 66%',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textWhite: {
    color: 'white',
  },
}));

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section} />
    </div>
  );
};

export default Hero;
