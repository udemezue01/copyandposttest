import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate.main,
  },
  inner: {
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
  innerNarrowed: {
    maxWidth: 800,
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
  backgroundImage: {
    backgroundImage: `url(https://landing.copyandpost.com/wp-content/uploads/2022/03/grad.png)`,
  },
  fullWidth: {
    maxWidth: '100%',
  },
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = ({
  children,
  innerNarrowed,
  disableTopPadding,
  disableBottomPadding,
  className,
  flexCenter,
  paddingSmall,
  backgroundImage,
  fullWidth,
  ...rest
}: SectionAlternateProps): JSX.Element => {
  const classes = useStyles();

  return (
    <section
      className={clsx(
        'section-alternate',
        classes.root,
        backgroundImage ? classes.backgroundImage : {},
        className,
      )}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
          disableTopPadding ? classes.disableTopPadding : {},
          disableBottomPadding ? classes.disableBottomPadding : {},
          flexCenter ? classes.flexCenter : {},
          paddingSmall ? classes.paddingSmall : {},
          fullWidth ? classes.fullWidth : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionAlternate;
