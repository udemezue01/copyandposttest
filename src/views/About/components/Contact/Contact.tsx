import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, Map } from 'components/organisms';

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <Grid container spacing={isMd ? 4 : 2}>
              <SectionHeader
                title="Get in touch"
                disableGutter
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
              />
              <Grid item xs={12} data-aos="fade-up">
                <Typography variant="subtitle1" color="textPrimary">
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
              </Grid>
              <Grid item xs={12} data-aos="fade-up">
                <Typography variant="subtitle1" color="textPrimary">
                  E-mail
                </Typography>
                <TextField
                  placeholder="Your e-mail address"
                  variant="outlined"
                  size="medium"
                  name="email"
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid item xs={12} data-aos="fade-up">
                <Typography variant="subtitle1" color="textPrimary">
                  Message
                </Typography>
                <TextField
                  placeholder="Your question about our services"
                  variant="outlined"
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item container justify="center" xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  submit
                </Button>
              </Grid>
            </Grid>
          </div>
        }
        rightSide={
          <Map
            center={[45.464211, 9.011383]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

export default Contact;
