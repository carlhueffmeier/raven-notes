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
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: '150px',
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: '150px',
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  }
});

const NoteListPane = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    width: 0,
    x: -200,
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: 90 + 'vw',
    x: 0,
    transition: {
      default: {
        duration: 150
      }
    }
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: '250px',
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  }
});

const EditorPane = posed.div({
  [layoutConstants.ONE_COLUMN_LAYOUT]: {
    width: 100 + 'vw',
    overflow: 'hidden',
    opacity: 1,

    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.TWO_COLUMN_LAYOUT]: {
    width: 0,
    opacity: 0,
    overflow: 'hidden',

    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
  },
  [layoutConstants.THREE_COLUMN_LAYOUT]: {
    width: 88 + 'vw',
    opacity: 1,
    overflow: 'hidden',
    transition: {
      default: {
        duration: 150,
        ease: 'linear'
      }
    }
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
