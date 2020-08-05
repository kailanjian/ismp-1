import React from 'react';
import { useTranslation } from 'react-i18next';
import { Responsive } from 'semantic-ui-react';
import styled from 'styled-components';
import sizes from 'styles/sizes';
import theme from 'styles/theme';
import { Button } from 'semantic-ui-react';
import { logApplyNowClick } from 'utils/google_tag_manager_helpers';
import { useHistory } from 'react-router-dom';

const style = {
  applyNowButton: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    background: '#FDC82E',
    borderRadius: '8px',
    padding: '15px'
  }
};

const Container = styled.section`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  height: calc(60vh - 40px);
`;

const StyledImageText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
`;

const MobileTitle = styled(StyledTitle)`
  font-size: 2.5rem;
`;

const StyledSubTitle = styled.h2`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  /* font-size: ${theme.fontSizes.h2}; */
`;

const MobileSubTitle = styled(StyledSubTitle)`
  font-size: 1.5rem;
`;
const HeroImageUrl =
  'https://ismp-us-east-1.s3.amazonaws.com/components/home/ismphero_optimized.jpg';

const DesktopHero = ({ translation }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/apply');
    logApplyNowClick();
  };

  return (
    <Responsive as={Container} minWidth={sizes.phone} style={{ width: '100%' }}>
      <StyledImage src={HeroImageUrl} alt="Welcome" />
      <StyledImageText>
        <StyledTitle>
          {translation('international_student_mentorship')}
        </StyledTitle>
        <StyledSubTitle>
          {translation('connecting_international_students')}
        </StyledSubTitle>
        <Button
          as="a"
          inverted={false}
          style={style.applyNowButton}
          onClick={handleClick}
        >
          {translation('apply_to_get_mentor')}
        </Button>
      </StyledImageText>
    </Responsive>
  );
};

// TODO: Figure out why there is mobile and desktop hero
const MobileHero = ({ translation }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/apply');
    logApplyNowClick();
  };

  return (
    <Responsive as={Container} maxWidth={sizes.phone}>
      <StyledImage src={HeroImageUrl} alt="Welcome" />

      <StyledImageText>
        <MobileTitle>
          {translation('international_student_mentorship')}
        </MobileTitle>
        <MobileSubTitle>
          {translation('connecting_international_students')}{' '}
        </MobileSubTitle>
        <Button
          as="a"
          inverted={false}
          style={style.applyNowButton}
          onClick={handleClick}
        >
          {translation('apply_to_get_mentor')}
        </Button>
      </StyledImageText>
    </Responsive>
  );
};

const HeroImage = () => {
  const { t } = useTranslation('general');

  return (
    <>
      <DesktopHero translation={t} />
      <MobileHero translation={t} />
    </>
  );
};

export default HeroImage;
