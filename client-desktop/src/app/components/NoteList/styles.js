import styled from 'react-emotion';

const NoteListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  border-right: 0.4px solid rgba(119, 136, 153, 0.8);
`;

const SingleNoteContainer = styled('div')`
  padding: 10px;
  margin-bottom: -12px;
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

const SubContainer = styled('div')`
  display: flex;
  padding-top: 2vh;
`;

const Day = styled('div')`
  justify-content: center;
  font-size: 0.8em;
  font-weight: 400;
  margin-right: 15px;
  max-width: 60px;
  min-width: 60px;
`;

const Hour = styled('span')`
  display: block;
  color: lightgray;
  margin-top: 5px;
`;

const Note = styled('div')`
  justify-content: space-evenly;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: flex-start;
  background-color: green;
`;

const Title = styled('div')`
  & * {
    margin: 20px 0 !important;
  }
`;

const Body = styled('div')`
  font-size: 0.8em;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled('div')`
  font-size: 0.7em;
  font-weight: 500;
  span {
    font-weight: 300;
  }
`;

const RowNote = styled(Note)`
  flex-flow: row wrap;
  background: whitesmoke;
`;

const RowTitle = styled(Title)`
  flex-basis: 1 1 15%;
`;

const RowBody = styled(Body)`
  flex-basis: 1 1 70%;
`;

const RowAuthor = styled(Author)`
  flex-basis: 1 1 15%;
`;

const Divider = styled('div')`
  border-bottom: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-bottom: 1vh;
`;

export {
  NoteListContainer,
  SingleNoteContainer,
  SubContainer,
  Day,
  RowNote,
  RowTitle,
  RowBody,
  RowAuthor,
  Divider,
  SearchAndCreateContainer,
  Hour,
  Note,
  Title,
  Body,
  Author
};
