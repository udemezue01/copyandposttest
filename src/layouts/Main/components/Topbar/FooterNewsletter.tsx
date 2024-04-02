import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Typography,
} from '@material-ui/core';
import { Icon, Image } from 'components/atoms';
import { useNewsLetterSubscription } from '../../../../../hooks';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: '2rem',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  formControl: {
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
  image: {
    maxWidth: 400,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '3rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: '2rem',
    },
  },
  header: {
    margin: 0,
  },
  button: {
    padding: '16px 16px',
    width: '15%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  successMessage: {
    color: 'white',
    marginTop: '1rem',
    marginBottom: '0',
  },
}));

export const FooterNewsletter = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const { withImage } = rest;

  const {
    States,
    state,
    setState,
    email,
    setEmail,
    name,
    setName,
    errorMessage,
    setErrorMessage,
    validateEmail,
    subscribe,
  } = useNewsLetterSubscription();

  return (
    <>
      <div className={className} {...rest}>
        {withImage && (
          <Grid item xs={12} sm={6} container>
            <Image
              src="https://assets.maccarianagency.com/the-front/illustrations/relax-in-sofa.svg"
              className={classes.image}
            />
          </Grid>
        )}
        <div className={classes.wrapper}>
          <Typography className={classes.textWhite} variant="h4">
            Download your FREE templates
          </Typography>
          <div className={classes.inputContainer}>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <OutlinedInput
                onChange={e => {
                  setName(e.target.value);
                }}
                value={name}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      fontIconClass="fas fa-user"
                      fontIconColor={colors.indigo[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Full Name"
              />
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <OutlinedInput
                onChange={e => {
                  validateEmail(e.target.value);
                  setEmail(e.target.value);
                }}
                value={email}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      fontIconClass="fas fa-paper-plane"
                      fontIconColor={colors.indigo[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Email"
              />
            </FormControl>
          </div>
          <Button
            disabled={!validateEmail(email) || state === 'LOADING'}
            size="large"
            variant="contained"
            type="submit"
            color="default"
            onClick={subscribe}
            className={classes.button}
          >
            Get Your Free Templates
          </Button>
        </div>
      </div>
      {state === States.SUCCESS && (
        <Typography
          align="center"
          variant="h6"
          className={classes.successMessage}
        >
          Thank you! Your free templates will be delivered to your inbox shortly
          👍
        </Typography>
      )}
    </>
  );
};
