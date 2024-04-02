import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, useTheme } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Discover = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={clsx(classes.textWhite, classes.title)}
          >
            Discover so much more than content to copy and post in our easy-to-navigate dashboard.
          </Typography>
        </Grid>
        <Grid item container xs={12}>
        {/* <Button
              variant="contained"
              color="inherit"
              size="large"
            >
              Free Trial Coming Soon!
            </Button> */}
          <Button
            onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            size="large"
            variant="contained" 
            color={"inherit"}
            title="Start Your Free Trial"
            aria-label={"Start Your Free Trial"}
            id="start-free-trial"
            type="button"
          >
            Start Your Free Trial Today 
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Discover;
