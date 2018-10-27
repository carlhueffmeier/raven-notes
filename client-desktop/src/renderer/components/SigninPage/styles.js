import styled from 'react-emotion';
import { BrandIcon } from '../Icons';

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.plight};
`;

const StyledBrandIcon = styled(BrandIcon)`
  font-size: 15rem;
  margin-right: 4rem;
`;

const Title = styled('h1')`
  font-size: 3em;
  margin: 0;
  color: ${props => props.theme.colors.text};
`;

const TitleWrapper = styled('div')`
  text-align: center;
  margin-bottom: 5vh;
`;

const SubTitle = styled('h2')`
  font-size: 1.4em;
  font-weight: 300;
  margin: 0;
  color: ${props => props.theme.colors.text};
`;

export { Container, StyledBrandIcon, Title, SubTitle, TitleWrapper };
