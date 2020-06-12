import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Section from '../../layout/Section';
import BlogCardList from '../../components/BlogCardList';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import BlogSearch from 'components/BlogSearch/BlogSearch';
import BlogTopicsSection from './BlogTopicsSection';
import FeaturedBlogSection from './FeaturedBlogSection';

const StyledButton = Styled.button`
  background: #341A93;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 118.5%;
  text-align: center;
  color: ${theme.colors.white};
  width: 330px;
  height: 76px;
  margin: 25px;
  :hover {
    background: ${theme.colors.lightPurple};
  }
`;

const StyledBlogSearch = Styled(BlogSearch)`
  margin: -30px -30px 0px -30px;
`;

const Blog = () => {
  return (
    <Container>
      <Section>
        <h1 style={{ textAlign: 'center' }}>Blog</h1>
      </Section>
      <Section>
        <Grid columns={2} doubling stackable>
          <Grid.Column width={8}>
            <FeaturedBlogSection />
          </Grid.Column>
          <Grid.Column width={7}>
            <StyledBlogSearch />
            <BlogTopicsSection />
          </Grid.Column>
        </Grid>
        <BlogCardList blogHeader="Transition to America" />
        <BlogCardList blogHeader="Tips for College" />
        <BlogCardList blogHeader="Career Building" />
        <Grid centered doubling stackable>
          <StyledButton>VIEW ALL BLOG ARTICLES</StyledButton>
        </Grid>
      </Section>
    </Container>
  );
};

export default Blog;
