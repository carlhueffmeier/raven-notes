import styled from 'react-emotion';

const NoteListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-top: 5px;
  background-color: ${props => props.theme.colors.plight};
`;

const SingleNoteContainer = styled('div')`
  padding: 10px;
  margin-bottom: -12px;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
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

const SubContainer = styled('div')`
  display: flex;
  padding-top: 15px;
`;

const Day = styled('div')`
  justify-content: center;
  font-size: 0.8em;
  font-weight: 400;
  margin-right: 15px;
  max-width: 60px;
  min-width: 60px;
  margin-top: 5px;
`;

const Note = styled('div')`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
  & div {
    margin: 5px 0;
  }
`;

const Title = styled('div')`
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 5px;
  & * {
    margin: 20px 0 !important;
  }
`;

const Body = styled('div')`
  max-width: 150px;
  font-size: 0.8em;
  font-weight: 400;
  color: ${props => props.theme.colors.pdark};
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
`;

const RowTitle = styled(Title)`
  justify-content: flex-start;
  margin-top: 0;
`;

const RowBody = styled(Body)`
  margin: 0 15px;
  max-width: 100vw;
`;

const SnippetFail = styled('span')`
  color: ${props => props.theme.colors.softWarning};
  opacity: 0.7;
  transition: all 0.3s linear;
`;

const RowAuthor = styled(Author)`
  flex: 0.5 1;
  text-align: right;
`;

const Divider = styled('div')`
  border-bottom: 0.4px solid rgba(119, 136, 153, 0.8);
  padding-bottom: 5px;
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
  Note,
  Title,
  Body,
  Author,
  SnippetFail,
  NoteListWrapper,
  RowDay
};
