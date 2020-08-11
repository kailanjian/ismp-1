import BlogCard from 'components/BlogCard';
import HeroImage from 'components/HeroImage/HeroImage';
import Subscribe from 'components/Subscribe';
import TestimonialCards from 'components/TestimonialCards/TestimonialCards';
import WebinarHighlight from 'components/WebinarHighlight';
import blogPostFallbackData from 'fallback_data/blogpostcontent.json';
import Header from 'layout/Header';
import SectionHeader from 'layout/SectionHeader';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed, Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';
import { BlogPosts } from 'utils/agent';
import { Helmet } from 'react-helmet';
import { programInstructions } from 'mock-data/program';
import InstructionCard from 'components/InstructionCard/InstructionCard';

const Home = () => {
  const { t } = useTranslation(['home', 'general']);

  const [featuredBlogPosts, setFeaturedBlogPosts] = useState([]);
  const [recentWebinars, setRecentWebinars] = useState([]);

  useEffect(() => {
    const getFeaturedBlogPosts = async () => {
      await BlogPosts.getFeatured()
        .then(results => {
          setFeaturedBlogPosts(results.results);
        })
        .catch(error => {
          const featuredBlogposts = blogPostFallbackData.filter(
            blogpostContentJson => blogpostContentJson.blogpost.is_featured
          );
          setFeaturedBlogPosts(featuredBlogposts);
        });
    };
    getFeaturedBlogPosts();
  }, []);

  useEffect(() => {
    const getRecentWebinars = async () => {
      await BlogPosts.getWebinars()
        .then(results => {
          setRecentWebinars(results.results);
        })
        .catch(error => {
          const fallbackWebinars = blogPostFallbackData.filter(
            blogpostContentJson =>
              blogpostContentJson.blogpost.type === 'webinar'
          );
          setRecentWebinars(fallbackWebinars);
        });
    };
    getRecentWebinars();
  }, []);

  return (
    <>
      <HeroImage />
      <!--<SpecialWebinarSection t={t} />-->
      <ProgramSection t={t} />
      <WhoAreWeSection t={t} />
      <MentorSection t={t} />
      <TestimonialCards />
      <HomeSection>
        <WebinarHighlightsSection t={t} webinars={recentWebinars} />
        <VerticalSpacer />
        <FeaturedBlogPostsSection t={t} blogPosts={featuredBlogPosts} />
      </HomeSection>
      <Subscribe />
    </>
  );
};

const HomeSection = styled.section`
  background: ${props => props.backgroundColor};
  margin: 0;
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  ${mixins.responsivePadding};
`;

const SpecialWebinarSection = ({ t }) => (
  <HomeSection>
    <SectionHeader>{t('webinar_section.title')}</SectionHeader>
    <Grid doubling stackable columns={2}>
      <Grid.Column>
        <a
          href="https://go.internationalmentorship.org/webinar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ismp-us-east-1.s3.amazonaws.com/home/webinar_how_to_avoid_scams.jpg"
            alt="Special Webinar: How to Avoid Scams"
          />
        </a>
      </Grid.Column>
      <Grid.Column>
        <h3>{t('webinar_section.webinar_title')}</h3>
        <p>{t('webinar_section.webinar_blurb')}</p>
        <h4>{t('webinar_section.us_time')}</h4>
        <h4>{t('webinar_section.asia_time')}</h4>
        <a
          href="https://go.internationalmentorship.org/webinar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            style={{
              background: theme.colors.yellow,
              color: theme.colors.black,
              fontSize: theme.fontSizes.md,
              marginTop: '20px'
            }}
          >
            {t('webinar_section.action')}
          </Button>
        </a>
      </Grid.Column>
    </Grid>
  </HomeSection>
);

const ProgramSection = ({ t }) => (
  <HomeSection backgroundColor={theme.colors.lightGrey} center>
    <SectionHeader>{t('steps_section.title')}</SectionHeader>
    <Grid doubling stackable columns={4}>
      {programInstructions.map(instruction => (
        <Grid.Column key={instruction.title}>
          <InstructionCard instruction={instruction} invertedColors={true} />
        </Grid.Column>
      ))}
    </Grid>
  </HomeSection>
);

const WhoAreWeSection = ({ t }) => (
  <HomeSection>
    <SectionHeader>{t('who_section.title')}</SectionHeader>
    <Grid doubling stackable columns={2}>
      <Grid.Column>
        <p>{t('who_section.blurb')}</p>
      </Grid.Column>
      <Grid.Column>
        <Embed
          aspectRatio="16:9"
          autoplay={false}
          active={true}
          icon="arrow circle down"
          id="q8BLjKq1XvU"
          iframe={{ allowFullScreen: true }}
          placeholder="/images/image-16by9.png"
          source="youtube"
        />
      </Grid.Column>
    </Grid>
  </HomeSection>
);

const MentorSection = ({ t }) => (
  <HomeSection backgroundColor={theme.colors.yellow} center>
    <SectionHeader center>{t('mentor_section.title')}</SectionHeader>
    <Grid doubling stackable columns={1}>
      <Grid.Column>
        <p>{t('mentor_section.blurb')}</p>
      </Grid.Column>
    </Grid>
  </HomeSection>
);

const WebinarHighlightsSection = ({ t, webinars }) => {
  let numWebinars = webinars.length;
  if (numWebinars === 0) {
    return <></>;
  }
  const maxWebinarsToDisplay = 2;
  const numWebinarsToDisplay = Math.min(numWebinars, maxWebinarsToDisplay);
  const webinarsToDisplay = webinars.slice(0, numWebinarsToDisplay);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>International Student Mentorship Program | ISMP</title>
        <meta
          name="description"
          content="International Student Mentorship Program is a nonprofit organization with volunteer mentors across the United States. We are passionate about guiding international students through college and graduate school in America, from the admissions process all the way through graduation."
        />
      </Helmet>
      <SectionHeaderContainer>
        <Header size="h2" font="serif">
          {t('webinar_highlights')}
        </Header>
        <HorizontalSpacer />
        <Link
          to={{ pathname: '/blog-list', state: { term: '', type: 'webinar' } }}
        >
          {t('general:view_all')}
        </Link>
      </SectionHeaderContainer>
      <Grid doubling stackable columns={numWebinarsToDisplay}>
        {webinarsToDisplay.map((webinar, index) => {
          return (
            <Grid.Column>
              <WebinarHighlight
                key={webinar.id}
                webinar={webinar}
                index={index}
              />
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
};

const FeaturedBlogPostsSection = ({ t, blogPosts }) => (
  <>
    <SectionHeaderContainer>
      <Header size="h2" font="serif">
        {t('featured_blogposts')}
      </Header>
      <HorizontalSpacer />
      <Link to="blog-list">{t('general:view_all')}</Link>
    </SectionHeaderContainer>
    <Grid doubling stackable columns={3}>
      {blogPosts.slice(0, 3).map((blogPost, index) => (
        <Grid.Column key={blogPost.title_content}>
          <BlogCard sourcePage={'home'} blogPost={blogPost} position={index} />
        </Grid.Column>
      ))}
    </Grid>
  </>
);

const SectionHeaderContainer = styled.div`
  ${mixins.marginBottomSm}
  ${mixins.flexStart};
  align-items: baseline;
`;

const HorizontalSpacer = styled.div`
  width: 12px;
`;

// TODO: Clean this up
const VerticalSpacer = styled.div`
  height: 64px;
`;

export default Home;
