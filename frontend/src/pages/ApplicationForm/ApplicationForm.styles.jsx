import styled from 'styled-components';
import theme from 'styles/theme';

export const Title = styled.h3`
  font-size: ${theme.fontSizes.lg};
`;

export const SubTitle = styled.h4`
  margin-top: 10px;
  font-size: ${theme.fontSizes.md};
`;

export const List = styled.ol`
  padding-left: 35px;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const Asterisk = styled.p`
  color: gray;
`;