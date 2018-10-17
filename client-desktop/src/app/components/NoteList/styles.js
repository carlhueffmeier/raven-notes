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
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
    left: -100px;
  }
`;

const NoNotesMessage = styled('div')`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  min-height: 5rem;
`;

export { Container, SearchAndCreateContainer, NoteListWrapper, NoNotesMessage };
