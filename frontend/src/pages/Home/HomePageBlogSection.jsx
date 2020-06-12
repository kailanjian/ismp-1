import React, { useState, useEffect } from 'react';
import BlogCardList from 'components/BlogCardList';
import { FeaturedBlogposts } from '../../utils/agent';
import Styled from 'styled-components';

const BlogCardContainer = Styled.div`
  margin: 2em 0;
  padding: 0 13.5%;
`;

const HomePageBlogSection = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const blogInfo = async () => {
      try {
        const blogCardData = await FeaturedBlogposts.getFeatured().then(
          response => response
        );
        setIsLoading(false);
        setFeaturedBlogs(blogCardData);
      } catch (error) {
        console.log(error);
      }
    };
    blogInfo();
  }, []);

  return (
    <BlogCardContainer>
      <BlogCardList
        blogHeader="Featured Blog Articles"
        cardInfo={isLoading ? null : featuredBlogs}
      />
    </BlogCardContainer>
  );
};

export default HomePageBlogSection;
