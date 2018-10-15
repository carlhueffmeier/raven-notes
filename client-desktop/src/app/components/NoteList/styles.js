/* import styled from 'react-emotion';

const NoteListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-top: 5px;
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

const NoteListWrapper = styled('div')`
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }
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
`;

const Title = styled('div')`
  font-size: 0.8em;
  font-size: 0.8em;
  font-size: 0.8em;
  font-weight: 500;
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
`;

const RowTitle = styled(Title)`
  justify-content: flex-start;
  flex: 0.5 1;
`;

const RowBody = styled(Body)`
  justify-content: center;
  flex: 2 1;
  margin: 0 15px;
  text-align: center;
  margin-top: 25px;
`;

const SnippetFail = styled('span')`
  color: crimson;
  opacity: 0.7;
  transition: all 0.3s linear;
  :hover:after {
    content: 'This note has no body yet';
    position: absolute;
    top: 0px;
    text-align: center;
  }
`;

const RowAuthor = styled(Author)`
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 50px;
  flex: 0.5 1;
  text-align: right;
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
  Author,
  SnippetFail,
  NoteListWrapper
};
 */

import styled from 'react-emotion';

const NoteListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-top: 5px;
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

const NoteListWrapper = styled('div')`
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }
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
`;

const Title = styled('div')`
  font-size: 0.8em;
  font-size: 0.8em;
  font-size: 0.8em;
  font-weight: 500;
  & * {
    margin: 20px 0 !important;
  }
`;

const Body = styled('div')`
  font-size: 0.8em;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;
`;

const Author = styled('div')`
  font-size: 0.7em;
  font-weight: 500;
  span {
    font-weight: 300;
  }
`;

const RowDay = styled(Day)`
  margin-left: 20px;
`;

const RowNote = styled(Note)`
  margin-left: 30px;
  & div {
    margin: 5px 0;
  }
`;

const RowTitle = styled(Title)`
  justify-content: flex-start;
`;

const RowBody = styled(Body)`
  margin: 0 15px;
`;

const SnippetFail = styled('span')`
  color: crimson;
  opacity: 0.7;
  transition: all 0.3s linear;
  :hover:after {
    content: 'This note has no body yet';
    position: absolute;
    top: 0px;
    text-align: center;
  }
`;

const RowAuthor = styled(Author)`
  flex: 0.5 1;
  text-align: right;
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
  Author,
  SnippetFail,
  NoteListWrapper,
  RowDay
};
