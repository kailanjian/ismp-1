import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Card, Image, Embed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//TODO: alt text on image tag
/*
TODO:
1)Create a dynamic alt tage for each image displayed
2)Create route on BlogCardTitle to route to the respective Blog's page that displays it's content
3)fix for content to be hidden once it maxizes out on BlogCard
*/

const StyledImage = styled(Image)`
  height: 248px;
  width: 330px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px 8px 0px 0px;
`;

const BlogCardTitle = styled(Link)`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
  line-height: 36px;
  color: ${theme.colors.black};
  :hover {
    color: ${theme.colors.purple};
  }
`;

const BlogCardBody = styled.p`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  background-color: #fbfbfb;
  border-radius: 8px;
`;

const StyledCard = styled(Card)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background: #fbfbfb;
  width: 330px !important;
  height: 443px !important;
`;

const displayVideoOrImage = (imgUrl, videoUrl) => {
  if (imgUrl !== null) {
    return <StyledImage src={imgUrl} alt="blogCategory Image" />;
  } else {
    let idPosition = videoUrl.indexOf('=');
    let video = videoUrl.substring(idPosition + 1);
    return (
      <Embed
        id={video}
        active={true}
        aspectRatio="4:3"
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
    );
  }
};

const BlogCard = ({ blogImgurl, blogTitle, blogDescription, blogVideo }) => {
  return (
    <StyledCard>
      {displayVideoOrImage(blogImgurl, blogVideo)}
      <Card.Content style={{ background: '#fbfbfb' }}>
        <BlogCardTitle to="/">{blogTitle}</BlogCardTitle>
        <BlogCardBody>{blogDescription}</BlogCardBody>
      </Card.Content>
    </StyledCard>
  );
};

export default BlogCard;

export { displayVideoOrImage };
