/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Affiliate from 'views/Affiliate';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AffiliatePage = (): JSX.Element => {
  return <WithLayout component={Affiliate} layout={Main} />;
};

export default AffiliatePage;
