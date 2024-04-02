import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth0Provider } from '@auth0/auth0-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { auth0Config } from './config';
import { useQueryParameter } from '../utils/useQueryParameter';
import getTheme from 'theme';

import AOS from 'aos';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const affiliateReferralCode = useQueryParameter('ref');

  if (affiliateReferralCode) {
    document.cookie = `referral=${affiliateReferralCode}; domain=.copyandpost.com; path=/`;
  }

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [themeMode]);

  return [themeMode, themeToggler, mountedComponent];
};

interface Props {
  layout: any;
  component: any;
  // All other props
  [x: string]: any;
}

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: Props): JSX.Element {
  const [window, setWindow] = useState(null);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent]);

  useEffect(() => {
    setWindow(window);
  }, []);

  return (
    <ParallaxProvider>
      <ThemeProvider theme={getTheme(themeMode)}>
        <Auth0Provider
          domain={auth0Config.domain}
          clientId={auth0Config.client_id}
          redirectUri={auth0Config.redirect_uri}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Paper elevation={0}>
            <Layout themeMode={themeMode} themeToggler={themeToggler}>
              <Component themeMode={themeMode} {...rest} />
            </Layout>
          </Paper>
        </Auth0Provider>
      </ThemeProvider>
    </ParallaxProvider>
  );
}
