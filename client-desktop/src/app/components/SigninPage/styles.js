import styled from 'react-emotion';

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.plight}
`;

const Img = styled('img')`
  width: 40%;
`;

const Title = styled('h1')`
  font-size: 3em;
  margin: 0;
  color: ${props => props.theme.colors.text}
`;

const TitleWrapper = styled('div')`
  text-align: center;
  margin-bottom: 5vh;
`;

const SubTitle = styled('h2')`
  font-size: 1.4em;
  font-weight: 300;
  margin: 0;
  color: ${props => props.theme.colors.text}

`;

export { Container, Img, Title, SubTitle, TitleWrapper };
