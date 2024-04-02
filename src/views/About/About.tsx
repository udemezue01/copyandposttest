import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { useMediaQuery } from '@material-ui/core';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  Features,
  About as AboutSection,
} from './components';

import { team, companies, mapData, gallery, features, services } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${theme.palette.copyandpost.grey}`,
  },
}));

const About = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate>
        <Story />
      </SectionAlternate>
      <div className={classes.shape}>
        <Section className={classes.sectionNoPaddingTop}>
          <AboutSection data={services} />
        </Section>
      </div>
      {/* <Section className={classes.sectionNoPaddingTop}>
        <Team data={team} />
      </Section>
      <SectionAlternate className={classes.sectionPartners}>
        <Partners data={companies} />
      </SectionAlternate> */}
      {/* <Contact data={mapData} /> */}
      {/* <SectionAlternate>
        <Gallery data={gallery} />
      </SectionAlternate> */}
    </div>
  );
};

export default About;
