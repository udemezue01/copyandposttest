import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Section, SectionAlternate } from 'components/organisms';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhone from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import { DarkModeToggler } from 'components/atoms';
import LogoTan from '../../../../assets/logo-tan.svg';
import LogoBlack from '../../../../assets/logo-black.svg';
import LogoBlackPng from '../../../../assets/logoBlack.png';
import { Contact } from './Contact';
import { FooterNewsletter } from './FooterNewsletter';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.copyandpost.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.copyandpost.green,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: '.5rem 0 .5rem 0',
    alignSelf: 'flex-end',
    marginLeft: theme.spacing(2),
    '&:hover': {
      background: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      alignSelf: 'center',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
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
  copyright: {
    background: '#f7f9fa',
    color: 'gray',
    padding: '0.5rem',
    textAlign: 'center',
  },
  footerNewsletterSection: {
    background: theme.palette.copyandpost.tan,
  },
}));

interface Props {
  className?: string;
  onSidebarOpen: Function;
  pages: any[];
  themeMode: string;
  themeToggler?: Function;
  isFooter?: boolean;
}

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  isFooter = false,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {isFooter && (
        <SectionAlternate
          fullWidth
          paddingSmall
          className={classes.footerNewsletterSection}
        >
          <FooterNewsletter withImage={false} />
        </SectionAlternate>
      )}
      <Toolbar disableGutters className={classes.toolbar} {...rest}>
        <div style={{ flex: 1 }}>
          <Link href="/" legacyBehavior>
            <a href="/" title="copyandpost">
              <Image
                src={
                  themeMode === 'light'
                    ? LogoBlackPng
                    : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
                }
                alt="copyandpost"
              />
            </a>
          </Link>
        </div>
        {/* <div className={classes.flexGrow} /> */}
        <div>
          <Hidden smDown>
            <List
              style={{ marginTop: isFooter ? '1rem' : '0' }}
              disablePadding
              className={classes.navigationContainer}
            >
              {pages.map((page, i) => (
                <div key={page.id}>
                  <Link href={`${page.to}`}>
                    <ListItem
                      aria-describedby={page.id}
                      className={classes.listItem}
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        className={clsx(classes.listItemText, 'menu-item')}
                      >
                        {page.title}
                      </Typography>
                    </ListItem>
                  </Link>
                </div>
              ))}
              {themeToggler && (
                <ListItem
                  className={clsx(classes.listItem, 'menu-item--no-dropdown')}
                >
                  <DarkModeToggler
                    themeMode={themeMode}
                    onClick={() => themeToggler()}
                  />
                </ListItem>
              )}
              <ListItem
                className={clsx(classes.listItem, 'menu-item--no-dropdown')}
              >
                <Button
                  variant="contained"
                  onClick={() => loginWithRedirect()}
                  color="secondary"
                  title="Member Login"
                  aria-label={'Member Login'}
                  id="member-login"
                  type="button"
                  className={classes.listItemButton}
                >
                  Member Login
                </Button>
              </ListItem>
              <ListItem
                className={clsx(classes.listItem, 'menu-item--no-dropdown')}
              >
                <Button
                  variant="contained"
                  onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                  color="primary"
                  title="Start Your Free Trial"
                  aria-label={'Start Your Free Trial'}
                  id="start-free-trial"
                  type="button"
                  className={classes.listItemButton}
                >
                  Start Your Free Trial
                </Button>
              </ListItem>
            </List>
            {isFooter && (
              <>
                <Contact />
              </>
            )}
          </Hidden>
        </div>
        <Hidden mdUp>
          <div className={classes.mobileFooter}>
            {themeToggler && (
              <DarkModeToggler
                themeMode={themeMode}
                onClick={() => themeToggler()}
              />
            )}
            <IconButton
              className={classes.iconButton}
              onClick={() => onSidebarOpen()}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            {isFooter && <Contact />}
          </div>
        </Hidden>
      </Toolbar>
      {isFooter && (
        <div className={classes.copyright}>
          © Copyright 2021 - 2024, Copy and Post. All rights reserved. View our
          <a href="/privacy-policy"> Privacy Policy.</a>
        </div>
      )}
    </>
  );
};

export default Topbar;
