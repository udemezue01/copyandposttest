import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useParallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  image: {
    position: 'relative',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    width: '100%',
    height: '100%',
  },
  parralax: {
    backgroundSize: 'auto !important',
  },
}));

/**
 * Component to display the Parallax backgrounds
 *
 * @param {Object} props
 */
const Parallax = ({
  backgroundImage,
  children,
  className,
  ...rest
}: ParallaxProps): JSX.Element => {
  const classes = useStyles();
  // const { ref } = useParallax<HTMLDivElement>({ speed: 10 });

  // React.useEffect(() => {
  //   const jarallaxElems = document.querySelectorAll('.jarallax');
  //   if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
  //     return;
  //   }

  //   const jarallax = require('jarallax').jarallax;
  //   jarallax(jarallaxElems, { speed: 0.2 });
  // });

  return (
    <>
      <ParallaxBanner layers={[{ image: backgroundImage, speed: -15 }]}>
        <div className={classes.image}>{children}</div>
      </ParallaxBanner>
      {/* <div
        className={clsx('jarallax', 'parallax', classes.root, className)}
        ref={ref}
      >
        {children}
      </div> */}
    </>
    // <div
    //   className={clsx('jarallax', 'parallax', classes.root, className)}
    //   data-jarallax
    //   data-speed="0.2"
    //   {...rest}
    // >
    //   <div
    //     className={clsx('jarallax-img', 'parallax__image', classes.image)}
    //     style={{ backgroundImage: `url(${backgroundImage})` }}
    //   />
    //   {children}
    // </div>
  );
};

export default Parallax;
