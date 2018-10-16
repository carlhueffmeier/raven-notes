import styled from 'react-emotion';

const PopUpContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const PopUpClose = styled('div')`
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  line-height: 1.8vw;
  & span {
    cursor: pointer;
    margin: 20px;
    top: 0;
    right: 0;
    position: absolute;
    font-weight: 900;
  }
`;

const PopContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitlePop = styled('h1')`
  font-size: 1.4em;
  margin-top: 40px;
  font-weight: 800;
`;

export { PopUpContainer, PopContentContainer, PopUpClose, TitlePop };
