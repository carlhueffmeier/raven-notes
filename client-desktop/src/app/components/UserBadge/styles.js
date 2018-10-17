import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  align-items: center;
  max-height: 50px;
  padding: 30px 15px 0 15px;

`;

const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: 0.9em;
  margin: 0;
  text-align: center;
`;

const Img = styled('img')`
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export { Container, H3, Img };
