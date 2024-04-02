import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhone from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  socialIcon: {
    padding: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  contact: {
    flex: 1,
    paddingBottom: '1rem',
    paddingLeft: '1rem',
  },
  contactInfo: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    rowGap: '10px',
  },
  iconWrapper: {
    display: 'flex',
    columnGap: '8px',
  },
  mobileFooter: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem',
  },
  contactHeader: {
    marginBottom: '.5rem',
    marginTop: '.5rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    textAlign: 'left',
    textTransform: 'uppercase',
    borderTop: '1px solid #e2e2e2',
    borderBottom: '1px solid #e2e2e2',
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Typography
        className={classes.contactHeader}
        variant="h6"
        color="textPrimary"
      >
        Contact Us
      </Typography>
      <div className={classes.contactInfo}>
        <div className={classes.info}>
          <Typography variant="subtitle2" color="textPrimary">
            <div className={classes.iconWrapper}>
              <EmailIcon color="primary" />
              <div>
                <a href="mailto:hello@copyandpost.com">hello@copyandpost.com</a>
              </div>
            </div>
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            <div className={classes.iconWrapper}>
              <LocationOnIcon color="primary" />
              <div>PO BOX 781 Swannanoa, NC 28778</div>
            </div>
          </Typography>
        </div>
        <div>
          <IconButton className={classes.socialIcon}>
            <a href="https://www.facebook.com/Copyandpostit" target="_blank">
              <FacebookIcon color="primary" fontSize="large" />
            </a>
          </IconButton>
          <IconButton className={classes.socialIcon}>
            <a href="https://www.instagram.com/copyandpostit/" target="_blank">
              <InstagramIcon color="primary" fontSize="large" />
            </a>
          </IconButton>
          <IconButton className={classes.socialIcon}>
            <a
              href="https://www.linkedin.com/company/copy-and-post/"
              target="_blank"
            >
              <LinkedInIcon color="primary" fontSize="large" />
            </a>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
