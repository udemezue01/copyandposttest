// eslint-disable-next-line
import { PaletteType } from '@material-ui/core';

const copyAndPost = {
  colors: {
    blue: '#1d1463',
    yellow: '#f7c32f',
    green: '#1f6a5c',
    red: '#e62748',
    grey: '#d8d8d8',
    light: '#f4f0ef',
    tan: '#d0c2ae',
    dark: '#545454',
  },
};

export const light = {
  alternate: {
    main: 'rgb(247, 249, 250)',
    dark: '#e8eaf6',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  type: 'light' as PaletteType,
  primary: {
    main: copyAndPost.colors.blue,
    light: copyAndPost.colors.light,
    dark: copyAndPost.colors.dark,
    red: copyAndPost.colors.red,
    grey: copyAndPost.colors.grey,
    black: copyAndPost.colors.dark,
    contrastText: '#fff',
  },
  secondary: {
    light: copyAndPost.colors.light,
    main: copyAndPost.colors.tan,
    dark: copyAndPost.colors.dark,
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#2d3748',
    secondary: '#718096',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fff',
    level2: '#f5f5f5',
    level1: '#fff',
    footer: '#1b1642',
  },
  copyandpost: {
    blue: copyAndPost.colors.blue,
    yellow: copyAndPost.colors.yellow,
    red: copyAndPost.colors.red,
    green: copyAndPost.colors.green,
    dark: copyAndPost.colors.dark,
    tan: copyAndPost.colors.tan,
    light: copyAndPost.colors.light,
    grey: copyAndPost.colors.grey,
  },
};

export const dark = {
  alternate: {
    main: '#2D3748',
    dark: '#24242b',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'dark' as PaletteType,
  primary: {
    main: '#90caf9',
    light: 'rgb(166, 212, 250)',
    dark: 'rgb(100, 141, 174)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#1A202C',
    default: '#121212',
    level2: '#333',
    level1: '#2D3748',
    footer: '#18181f',
  },
};
