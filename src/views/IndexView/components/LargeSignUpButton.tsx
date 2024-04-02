import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
  signUpButton: {
    fontSize: '1.2rem',
  },
}));

interface LargeSignUpButtonProps {
  sectionAlternate?: boolean;
}

export const LargeSignUpButton = ({
  sectionAlternate,
}: LargeSignUpButtonProps) => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  if (sectionAlternate) {
    return (
      <SectionAlternate paddingSmall flexCenter>
        <Button
          className={classes.signUpButton}
          title="Start Your Free Trial "
          aria-label={'Start Your Free Trial Today'}
          id="start-free-trial"
          type="button"
          size="large"
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          Start Your Free Trial
        </Button>
      </SectionAlternate>
    );
  }

  return (
    <Section paddingSmall flexCenter>
      <Button
        className={classes.signUpButton}
        title="There's No Comparison"
        aria-label={"There's No Comparison"}
        id="start-free-trial"
        type="button"
        size="large"
        variant="contained"
        color="primary"
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      >
        There's No Comparison
      </Button>
    </Section>
  );
};
