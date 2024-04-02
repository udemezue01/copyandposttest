/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {},
  marginBottom: {
    marginBottom: '20px',
  },
  listItem: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

interface Props {
  className?: string;
  onClose: Function;
  pages: any;
}

const SidebarNav = ({
  pages,
  onClose,
  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      {pages.map((page, i) => (
        <div key={page.id}>
          <Link href={`${page.to}`}>
            <a href={'#'}>
              <ListItem
                className={classes.listItem}
                aria-describedby={page.title}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  // className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
              </ListItem>
            </a>
          </Link>
        </div>
      ))}
      <ListItem className={classes.listItem}>
        {/* <Button
        variant="contained"
        color="primary"
        size="large"
      >
          Free Trial Coming Soon!
      </Button> */}
        <Button
          variant="contained"
          color="primary"
          title="Member Login"
          aria-label={'Member Login'}
          id="start-free-trial"
          type="button"
          fullWidth
          className={classes.marginBottom}
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          Start Your Free Trial
        </Button>
        <Button
          variant="contained"
          color="secondary"
          title="Member Login"
          aria-label={'Member Login'}
          id="member-login"
          type="button"
          fullWidth
          onClick={() => loginWithRedirect()}
        >
          Member Login
        </Button>
      </ListItem>
    </List>
  );
};

export default SidebarNav;
