import React from 'react';
import ComingSoon from 'views/ComingSoon';
import Main from 'layouts/Main';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const MyPagePage = (): JSX.Element => {
  return <WithLayout component={ComingSoon} layout={Minimal} />;
};

export default MyPagePage;
