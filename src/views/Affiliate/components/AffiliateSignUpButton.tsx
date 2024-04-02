import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  signUpButton: {
    fontSize: '1.2rem',
    background: theme.palette.copyandpost.green,
  },
}));

interface LargeSignUpButtonProps {
  sectionAlternate?: boolean;
}

export const AffiliateSignUpButton = ({
  sectionAlternate,
}: LargeSignUpButtonProps) => {
  const classes = useStyles();

  if (sectionAlternate) {
    return (
      <SectionAlternate paddingSmall flexCenter>
        <a href="https://copyandpost.tapfiliate.com" target="_blank">
          <Button
            className={classes.signUpButton}
            title="Start Your Free Trial "
            aria-label={'Start Your Free Trial Today'}
            id="start-free-trial"
            type="button"
            size="large"
            variant="contained"
            color="primary"
            // onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
          >
            Start Earning Today
          </Button>
        </a>
      </SectionAlternate>
    );
  }

  return (
    <Section paddingSmall flexCenter>
      <a href="">
        <Button
          className={classes.signUpButton}
          title="There's No Comparison"
          aria-label={"There's No Comparison"}
          id="start-free-trial"
          type="button"
          size="large"
          variant="contained"
          color="primary"
          // onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          Sign Up Today And Start Earning Today
        </Button>
      </a>
    </Section>
  );
};
