import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Typography,
} from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { useNewsLetterSubscription } from '../../../../../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.copyandpost.tan,
    backgroundSize: 'cover',
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important',
    },
  },
  marginBottom: {
    marginBottom: '30px',
  },
}));

const Newsletter = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const {
    States,
    state,
    setState,
    email,
    setEmail,
    errorMessage,
    setErrorMessage,
    validateEmail,
    subscribe,
  } = useNewsLetterSubscription();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <>
          <SectionHeader
            title={
              <span className={classes.textWhite}>
                Subscribe To Our Newsletter
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>
                Don't lose a chance to be among the firsts to know about our
                upcoming news and updates.
              </span>
            }
            fadeUp
          />
          <div className={classes.inputContainer}>
            <FormControl
              fullWidth
              variant="outlined"
              data-aos="fade-up"
              className={classes.formControl}
            >
              <OutlinedInput
                onChange={e => {
                  validateEmail(e.target.value);
                  setEmail(e.target.value);
                }}
                value={email}
                className={classes.marginBottom}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      fontIconClass="fas fa-paper-plane"
                      fontIconColor={colors.indigo[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Enter your email"
              />
              {state !== States.SUCCESS && (
                <Button
                  variant="contained"
                  type="submit"
                  color="default"
                  size="large"
                  onClick={subscribe}
                  disabled={!validateEmail(email) || state === 'LOADING'}
                >
                  Subscribe
                </Button>
              )}
              {state === States.SUCCESS && (
                <Typography
                  align="center"
                  variant="h4"
                  className={classes.textWhite}
                >
                  Success 👍
                </Typography>
              )}
            </FormControl>
          </div>
        </>
      </Section>
    </div>
  );
};

export default Newsletter;
