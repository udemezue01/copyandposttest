import React, { useEffect } from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate, Parallax } from 'components/organisms';
import clsx from 'clsx';
import {
  GetStarted,
  QuickStart,
  Callouts,
  Hero,
  Pricing,
  ReadyMade,
  Discover,
  PricingSection,
  TheMaverick,
  TheModern,
  TheMoody,
  Masonry,
  NewsletterBanner,
} from './components';
import Features from '../CloudHosting/components/Features';
import Partners from '../DesktopApp/components/Partners';
import Reviews from '../Startup/components/Reviews';
import Video from '../Logistics/components/Video';
import Questions from '../HelpCenterArticle/components/Questions';
import Contact from '../WebBasic/components/Contact';
import {
  work,
  services,
  features,
  integrations,
  reviews,
  props,
  pricings,
  questions,
  folio,
} from './data';
import { LargeSignUpButton } from './components/LargeSignUpButton';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: theme.palette.copyandpost.green,
  },
  adidasSection: {
    backgroundColor: '#11114987',
  },
  modernSection: {
    backgroundColor: '#99292c87',
  },
  fullHeight: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  textWhite: {
    color: 'white',
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  footerNewsletterSection: {
    background: theme.palette.copyandpost.green,
  },
}));

const IndexView = ({ themeMode, data }) => {
  const classes = useStyles();

  return (
    <div>
      {data && data.edges[0].node.homepage && (
        <>
          <Hero themeMode={themeMode} data={data.edges[0].node.homepage.hero} />
          <Section disableBottomPadding>
            <Features data={features} />
          </Section>
          <SectionAlternate paddingSmall>
            <SectionHeader
              title={<span>Custom Content Collections</span>}
              subtitle={
                <span>
                  A cohesive brand starts with a stylish Content Collection
                  which is designed with different colors, fonts and FREE Canva
                  elements. Our templates are one-of-kind and fully customizable
                  with a FREE Canva account.
                </span>
              }
              titleVariant="h2"
              data-aos="fade-up"
            />
          </SectionAlternate>
          <Parallax
            backgroundImage="https://landing.copyandpost.com/wp-content/uploads/2022/06/Hero-pics-for-CP-Site-1.png"
            id="the-moody"
          >
            <div className={clsx(classes.fullHeight, classes.adidasSection)}>
              <Section>
                <TheMoody />
              </Section>
            </div>
          </Parallax>
          <Parallax
            backgroundImage="https://landing.copyandpost.com/wp-content/uploads/2022/06/Hero-pics-for-CP-Site-2.png"
            id="the-maverick"
          >
            <div className={clsx(classes.fullHeight, classes.adidasSection)}>
              <Section>
                <TheMaverick />
              </Section>
            </div>
          </Parallax>
          <Parallax
            backgroundImage="https://landing.copyandpost.com/wp-content/uploads/2022/06/Hero-pics-for-CP-Site-3.png"
            id="the-modern"
          >
            <div className={clsx(classes.fullHeight, classes.adidasSection)}>
              <Section>
                <TheModern />
              </Section>
            </div>
          </Parallax>
          <SectionAlternate>
            <Partners data={integrations} />
          </SectionAlternate>
          {/* <Section>
            <Reviews data={reviews} />
          </Section> */}
          <LargeSignUpButton sectionAlternate />
          <Video />
          {/* <SectionAlternate className={classes.sectionDescription}>
            <Discover />
          </SectionAlternate> */}
          <LargeSignUpButton />
          <SectionAlternate backgroundImage>
            <Callouts
              data={services}
              testData={data.edges[0].node.homepage.icongrid}
            />
          </SectionAlternate>
          {/* <Section className={classes.dividerSection}>
            <Divider />
          </Section> */}
          <SectionAlternate>
            <PricingSection data={props} pricings={pricings} />
          </SectionAlternate>
          <SectionAlternate
            paddingSmall
            fullWidth
            className={classes.footerNewsletterSection}
          >
            <NewsletterBanner />
          </SectionAlternate>
          <Section paddingSmall>
            <Questions data={questions} />
          </Section>
          <SectionAlternate>
            <Masonry data={folio} />
          </SectionAlternate>
        </>
      )}
    </div>
  );
};

export default IndexView;
