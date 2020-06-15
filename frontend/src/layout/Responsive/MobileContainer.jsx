import Spinner from 'components/Spinner/Spinner.component';
import Footer from 'layout/Footer';
import Nav from 'layout/Navigation';
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

import { getWidth } from './responsiveUtils';

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };

  const handleToggle = () => {
    setSidebarOpened(true);
  };

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
        borderless
      >
        <Suspense fallback={<Spinner />}>
          <Nav mobile={true} />
        </Suspense>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Container>
            {/* Hamburger button */}
            <Menu inverted pointing secondary size="massive">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item
                key="apply"
                as={Link}
                name="apply"
                to="/apply"
                style={{ alignSelf: 'center' }}
                position="right"
              >
                <Button primary size="medium" content="Apply Now" />
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {children}
        <Suspense fallback={<Spinner />}>
          <Footer />
        </Suspense>
      </Sidebar.Pusher>
    </Responsive>
  );
};

export default MobileContainer;
