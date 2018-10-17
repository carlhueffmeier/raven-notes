import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  align-items: center;
`;

const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: 0.9em;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

const Img = styled('img')`
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

const SignoutButton = styled('button')`
  font-size: 1rem;
  margin-left: 1rem;
  background: transparent;
  cursor: pointer;
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
`;

export { Container, H3, Img, SignoutButton };
