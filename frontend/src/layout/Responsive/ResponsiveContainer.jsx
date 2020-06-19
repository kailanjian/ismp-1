import React from 'react';
import { useHistory } from 'react-router-dom';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children }) => {
  const history = useHistory();
  history.listen(location => {
//     ReactGA.set({ page: location.pathname }); // Update the user's current page
//     ReactGA.pageview(location.pathname); // Record a pageview for the given page
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': location.pathname,
    'page_type': 'application'
  });
  console.log('window layer', window.dataLayer);

  });
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
};

export default ResponsiveContainer;
