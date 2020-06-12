import React, { useState, useEffect } from 'react';
import { BlogTopics } from '../../utils/agent';
import { Grid, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';
import Styled from 'styled-components';

const StyledLink = Styled(Link)`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.black};
  
  :hover {
    color: ${theme.colors.lightPurple};
  }

  :active {
    color: #341A93;
    text-decoration: underline;
  }
`;

const BlogTopicsSection = () => {
  const [blogTopicName, setBlogTopicNames] = useState([]);
  const [isBlogTopicNameLoading, setBlogTopicNameLoading] = useState(true);

  useEffect(() => {
    const blogTopicNamesInfo = async () => {
      try {
        const blogtopicNames = await BlogTopics.getBlogCategories().then(
          response => response
        );
        setBlogTopicNameLoading(false);
        setBlogTopicNames(blogtopicNames);
      } catch (error) {
        console.log(error);
      }
    };
    blogTopicNamesInfo();
  }, []);

  const blogTopics = isBlogTopicNameLoading
    ? null
    : blogTopicName.map(topic => {
        return (
          <Grid.Column key={topic.id} width={16}>
            <StyledLink to="/">{topic.name}</StyledLink>
          </Grid.Column>
        );
      });

  return (
    <Segment style={{ background: '#FBFBFB', borderRadius: '8px' }}>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <List horizontal>
              <List.Item>
                <Grid.Column>
                  <h2>Topics</h2>
                </Grid.Column>
              </List.Item>
              <List.Item>
                <Grid.Column>
                  <StyledLink to="/">view all</StyledLink>
                </Grid.Column>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row width={8}>{blogTopics}</Grid.Row>
      </Grid>
    </Segment>
  );
};

export default BlogTopicsSection;
