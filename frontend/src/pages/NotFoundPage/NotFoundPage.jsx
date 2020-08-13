import { Container, Grid } from 'semantic-ui-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Section from 'layout/Section';
import PageContainer from 'layout/PageContainer/PageContainer';

const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorHeader = styled.h2`
  font-size: 28px;
`;

const ErrorBlurb = styled.h3`
  font-size: 18px;
`;

const NotFoundPage = () => {
  const { t } = useTranslation('general');

  // https://www.kapwing.com/404-illustrations?ref=producthunt
  return (
    <PageContainer>
      <Section>
        <Container text>
          <Grid stackable verticalAlign="middle">
            <Grid.Row centered>
              <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/DWO5Hzg.png" />
                <ErrorHeader>{t('page_not_found')}</ErrorHeader>
                <ErrorBlurb>{t('sorry_blurb')}</ErrorBlurb>
              </ErrorImageOverlay>
            </Grid.Row>
          </Grid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default NotFoundPage;
