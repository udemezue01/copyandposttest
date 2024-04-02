/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PrivacyPolicy from 'views/PrivacyPolicy';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PrivacyPolicyPage = (): JSX.Element => {
  return <WithLayout component={PrivacyPolicy} layout={Main} />;
};

export default PrivacyPolicyPage;
