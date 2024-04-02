import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {} from '@material-ui/core';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { SectionAlternate } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: theme.palette.copyandpost.tan
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

const Work = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const { calloutone, callouttwo, calloutthree, title, subtitle } = data;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />
      <Grid container justify="center">
        {[calloutone, callouttwo, calloutthree].map((callout: any, index: number) => (
          <Grid
            data-aos="fade-up"
            key={index}
            item
            container
            xs={12}
            spacing={isMd ? 4 : 2}
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6}>
              <SectionHeader
                titleVariant="h5"
                title={callout.title}
                subtitle={callout.subtext}
                align="left"
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={6}>
              <Image src={callout.image.mediaItemUrl} alt={callout.title} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Work;
