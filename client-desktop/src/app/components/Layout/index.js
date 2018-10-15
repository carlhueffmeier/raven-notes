import React, { Component, Fragment } from 'react';
import posed from 'react-pose';
import styled from 'react-emotion';
import { constants as layoutConstants } from '../../redux/modules/layout';

const Container = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    display: 'flex'
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    display: 'flex'
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    display: 'flex'
  }
});

const SidebarPane = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    x: -200,
    width: 0,
    paddingTop: 25
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: '150px',
    paddingTop: 25,
    x: 0,
    transition: {
      default: {
        duration: 0,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: '150px',
    paddingTop: 25,
    x: 0
  }
});

const NoteListPane = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    width: 0,
    x: -200
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: 95 + 'vw',
    x: 0
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: '250px',
    x: 0
  }
});

const EditorPane = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    width: 100 + 'vw',
    overflow: 'hidden',
    opacity: 1
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: 0,
    opacity: 0,
    overflow: 'hidden'
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: 88 + 'vw',
    opacity: 1,
    overflow: 'hidden'
  }
});

const StyledSidebarPane = styled(SidebarPane)`
  transition: all 0.3s linear;
`;

const StyledNoteListPane = styled(NoteListPane)`
  transition: all 0.3s linear;
`;

const StyledEditorPane = styled(EditorPane)`
  transition: all 0.3s linear;
`;

class Layout extends Component {
  static Sidebar = ({ children }) => <Fragment>{children}</Fragment>;
  static NoteList = ({ children }) => <Fragment>{children}</Fragment>;
  static Editor = ({ children }) => <Fragment>{children}</Fragment>;

  renderTypeOf = type => {
    const filteredComponents = React.Children.map(
      this.props.children,
      child => (child.type === type ? child : null)
    );
    return filteredComponents[0] ? filteredComponents[0] : null;
  };

  render() {
    const { layout } = this.props;
    return (
      <Container pose={layout}>
        <StyledSidebarPane key={1}>{this.renderTypeOf(Layout.Sidebar)}</StyledSidebarPane>
        <StyledNoteListPane key={2}>{this.renderTypeOf(Layout.NoteList)}</StyledNoteListPane>
        <StyledEditorPane key={3}>{this.renderTypeOf(Layout.Editor)}</StyledEditorPane>
      </Container>
    );
  }
}

export default Layout;
