import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-top: 5px;
  background-color: ${props => props.theme.colors.plight};
`;

const SearchAndCreateContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: 25px;
  max-height: 25px;
  margin-top 19px;
`;

const NoteListWrapper = styled('div')`
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
    left: -100px;
  }
`;

const NoNotesMessage = styled('div')`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 5rem;
  & > .text {
    color: ${props => props.theme.colors.text};
    opacity: 0.6;
    margin-right: 1rem;
    position: relative;
    top: -60px;
  }
`;

export { Container, SearchAndCreateContainer, NoteListWrapper, NoNotesMessage };
