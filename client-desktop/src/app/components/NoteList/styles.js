import styled from 'react-emotion';

const NoteListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;

const SingleNoteContainer = styled('div')`
  padding: 10px;
  margin-bottom: -12px;
`;

const SubContainer = styled('div')`
  display: flex;
`;

const Day = styled('div')`
  justify-content: column;
  font-size: 0.8em;
  font-weight: 500;
  width: 15%;
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

const Divider = styled('hr')`
  border-bottom: 0.1px solid #8c8b8b;
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
  Divider
};
