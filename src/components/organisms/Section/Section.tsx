import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  paddingSmall: {
    padding: theme.spacing(6, 2),
  },
  disablePadding: {
    padding: 0,
  },
  disableTopPadding: {
    paddingTop: 0,
  },
  disableBottomPadding: {
    paddingBottom: 0,
  },
  narrow: {
    maxWidth: 800,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

/**
 * Component to display the sections
 *
 * @param {Object} props
 */
const Section = ({
  children,
  fullWidth,
  narrow,
  disablePadding,
  disableTopPadding,
  disableBottomPadding,
  className,
  flexCenter,
  paddingSmall,
  ...rest
}: SectionProps): JSX.Element => {
  const classes = useStyles();

  return (
    <section
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        disableTopPadding ? classes.disableTopPadding : {},
        disableBottomPadding ? classes.disableBottomPadding : {},
        flexCenter ? classes.flexCenter : {},
        paddingSmall ? classes.paddingSmall : {},
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
