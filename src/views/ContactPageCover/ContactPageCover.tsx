import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-8),
      marginRight: theme.spacing(-8),
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '47vw',
      maxWidth: 740,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
}));

const ContactPageCover = (): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        name: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xyylzdjr',
      data: inputs,
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="https://landing.copyandpost.com/wp-content/uploads/2021/04/4.png"
              alt="Contact"
              className={classes.image}
              lazyProps={{ width: '100%' }}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              titleVariant="h1"
              titleStyles={{ fontSize: '1.9983rem' }}
              title="Contact us for anything"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="center"
            />
            <div>
              <form onSubmit={handleOnSubmit}>
                <Grid container spacing={isMd ? 4 : 2}>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography variant="subtitle1" color="textPrimary">
                      Full name
                    </Typography>
                    <TextField
                      required
                      placeholder="Your full name"
                      variant="outlined"
                      size="medium"
                      name="fullname"
                      fullWidth
                      type="text"
                      id="name"
                      onChange={handleOnChange}
                      value={inputs.name}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography variant="subtitle1" color="textPrimary">
                      E-mail
                    </Typography>
                    <TextField
                      required
                      placeholder="Your e-mail address"
                      variant="outlined"
                      size="medium"
                      name="email"
                      fullWidth
                      type="email"
                      id="email"
                      onChange={handleOnChange}
                      value={inputs.email}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography variant="subtitle1" color="textPrimary">
                      Message
                    </Typography>
                    <TextField
                      required
                      placeholder="Your question about our services"
                      variant="outlined"
                      name="message"
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      onChange={handleOnChange}
                      value={inputs.message}
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
                      {!status.submitting
                        ? !status.submitted
                          ? 'Submit'
                          : 'Submitted'
                        : 'Submitting...'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <p>{status.info.msg}</p>
              )}
            </div>
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageCover;
