import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    },
    content: {
      height: '100%',
    },
  }));

  interface Props {
    children: React.ReactNode;
    themeMode: string;
    className?: string;
  };

const Blank = ({ themeMode, children, className }: Props): JSX.Element => {
    const classes = useStyles();
  
    return (
      <div className={clsx(classes.root, className)}>
        <main className={classes.content}>{children}</main>
      </div>
    );
  };
  
  export default Blank;