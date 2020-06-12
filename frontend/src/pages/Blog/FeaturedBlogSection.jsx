import React, { useState, useEffect } from 'react';
import { FeaturedBlogposts } from '../../utils/agent';
import { Grid, Segment, Embed } from 'semantic-ui-react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

/* TODO
1)remove html tags for content
2)Create a function that determines if media_url is for image or video.
3)If video then use the Embed component to display the video.
4)turn iso date-time format into date format to return Month, date and Year to display
5)
*/

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

const WebinarLink = Styled(StyledLink)`
  color: ${theme.colors.lightPurple};
  text-decoration: underline;
  :active {
    color: ${theme.colors.purple};
  }
`;

const FeaturedBlogSection = () => {
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [isFeaturedBlogLoading, setFeaturedBlogLoading] = useState(true);

  useEffect(() => {
    const blogInfo = async () => {
      try {
        const blogCardData = await FeaturedBlogposts.getFeatured().then(
          response => response
        );
        setFeaturedBlogLoading(false);
        setFeaturedBlog(blogCardData);
      } catch (error) {
        console.log(error);
      }
    };
    blogInfo();
  }, []);

  const featuredBlogInfo = bloglist => {
    return isFeaturedBlogLoading
      ? null
      : bloglist.slice(0, 1).map(featured => {
          return (
            <Segment key={featured.id}>
              {console.log(featured)}
              <Grid doubling stackable>
                <Grid.Column>
                  <h3>Featured</h3>
                  {console.log(featured.blogpost.media_url)}
                  <Embed
                    id="O6Xo21L0ybE"
                    placeholder="/images/image-16by9.png"
                    source="youtube"
                    iframe={{
                      style: {
                        width: 480,
                        heigth: 270
                      }
                    }}
                  />
                  <h4>Tips for College</h4>
                  <h3>{featured.title_content}</h3>
                  <p>
                    <span style={{ fontStyle: 'italic' }}>
                      May 15, 2020 by Alex Lee -
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fermentum pellentesque efficitur. Aliquam id lectus a libero
                    egestas tristique vitae ac diam. Lorem ipsum dolor....
                  </p>
                  <WebinarLink>Watch Webinar Highlights</WebinarLink>
                </Grid.Column>
              </Grid>
            </Segment>
          );
        });
  };

  return isFeaturedBlogLoading ? null : featuredBlogInfo(featuredBlog);
};

export default FeaturedBlogSection;
