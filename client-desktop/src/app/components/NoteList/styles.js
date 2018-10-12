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
  background-color: pink;
`

const SubContainer = styled('div')`
  display: flex;
  padding-top: 2vh;
`;

const Day = styled('div')`
  justify-content: column;
  font-size: 0.8em;
  font-weight: 400;
  width: 15%;
  padding-right: 5px;
`;

const Note = styled('div')`
  justify-content: column;
  width: 85%;
`;

const Title = styled('div')`
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Body = styled('div')`
  font-size: 0.8em;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled('div')`
  font-size: 0.7em;
  font-weight: 500;
  margin-top: 6px;
  span {
    font-weight: 300;
  }
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
  Note,
  Title,
  Body,
  Author,
  Divider,
  SearchAndCreateContainer
};
