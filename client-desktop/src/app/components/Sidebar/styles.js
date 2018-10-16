import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  height: 100%;
  padding: 25px 15px 0 15px;
  background-color: ${props => props.theme.colors.primary};
`;
const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: 0.9em;
  margin: 0;
  text-align: center;
`;

const SName = styled('div')`
  font-size: 0.8em;
  font-weight: 500;
  color: #778899;
  margin-bottom: 1vh;
`;

const USection = styled('div')`
  font-weight: 600;
  padding: 1vh;
`;

const GSection = styled('div')`
  font-weight: 500;
  color: #333;
  padding: 1vh;
`;

const Sect = styled('div')`
  margin: 4px;
  max-width: auto;
  font-size: 0.8em;
  padding-bottom: 2px;
  display: inline-flex;
  line-height: 20px;
  cursor: pointer;
  :hover {
    color: peachpuff;
  }
  & p {
    margin: 0;
  }
  & img:hover {
    transition: all 0.3s ease-in-out 0.2s;
    transform: rotateZ(360deg);
  }
  & img {
    ${props =>
      props.color
        ? `
            filter: brightness(1.5);
          `
        : null};
  }
  ${props =>
    props.color
      ? `
          color: ${props.color};
        `
      : null};
`;

const SearchBox = styled('input')`
  border-radius: 20px;
  transition: 1s;
  margin: 0 5px;
  padding: 5px;
  text-indent: 8px;
  :hover,
  :focus {
    background-color: black;
    color: #2bff00;
  }
  :focus {
    outline: 0;
  }
`;

const GroupName = styled('span')`
  flex-basis: 80%;
  :active {
    text-decoration: underline;
  }
  line-height: 20px;
`;

const Button = styled('button')`
  border-radius: 20px;
  height: 27px;
  background-color: black;
  color: white;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :hover {
    border: 1px solid white;
  }
`;

const Img = styled('img')`
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

const GroupInitial = styled('div')`
  width: 20px;
  height: 20px;
  padding: 5px;
  margin-right: 10px;
  background-color: #fec66c;
  border-radius: 50%;
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  min-width: 20px;
  color: black;
  & p {
    margin: 0;
    line-height: 12px;
  }
`;

const ButtonAddGroup = styled('div')`
  // width: 25px;
  // height: 25px;
  line-height: 13px;
  border: none;
  margin-left: 20px;
`;

const ButtonAddImg = styled('img')`
  width: 1vw;
`;

export {
  SidebarContainer,
  SName,
  USection,
  GSection,
  Sect,
  H3,
  SearchBox,
  Button,
  Img,
  GroupInitial,
  GroupName,
  ButtonAddGroup,
  ButtonAddImg
};
