import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  colors,
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Icon,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { useNewsLetterSubscription } from '../../../../../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.dark,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  cover: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
  },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const Form = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.cover}>
        <Image src="https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg" />
      </div>
      <SectionHeader
        title="Email newsletter"
        subtitle="Subscribe to our Newsletter for new blog posts, tips & new photos"
        titleProps={{
          variant: 'h4',
          color: 'textPrimary',
        }}
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align="left"
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          {/* <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
            />
          </Grid> */}
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                onChange={e => {
                  validateEmail(e.target.value);
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
              />
            </FormControl>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Button
              disabled={!validateEmail(email) || state === 'LOADING'}
              onClick={subscribe}
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Subscribe
            </Button>
          </Grid>
          {/* <Grid item container justify="center" xs={12}>
            <Typography variant="caption" color="textSecondary">
              Subscribe to our Newsletter for new blog posts, tips & new photos.
            </Typography>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Form;
