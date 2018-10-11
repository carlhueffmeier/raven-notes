import React, { Component, Fragment } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'react-emotion';

const Container = posed.div({
  oneColumnLayout: {
    display: "flex",
  },
  twoColumnLayout: {
    display: "flex",
  },
  threeColumnLayout: {
    display: "flex",
  }
});

const SidebarPane = posed.div({
  oneColumnLayout: {
    x: -200,
    width: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: "150px",
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    } 
  },
  threeColumnLayout: {
    width: "150px",
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  }
});

const NoteListPane = posed.div({
  oneColumnLayout: {
    width: 0,
    x: -200,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: 100 + "vw",
    x: 0,
    transition: {
      default: {
        duration: 150
      }
    }
  },
  threeColumnLayout: {
    width: "250px",
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  }
});

const EditorPane = posed.div({
  oneColumnLayout: {
    width: 100 + "vw",
    overflow: 'hidden',
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: 0,
    overflow: 'hidden',
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  threeColumnLayout: {
    width: 68 + "vw",
    overflow: 'hidden',
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
});

//Fallbacks in case posed transitions break

const StyledSidebarPane = styled(SidebarPane)`
  transition: all 0.3s linear
`;

const StyledNoteListPane = styled(NoteListPane)`
  transition: all 0.3s linear;
`;

const StyledEditorPane = styled(EditorPane)`
  transition: all 0.3s linear
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
    const { columns } = this.props;
    let pose = "oneColumnLayout";
    if (columns === 2) {
      pose = "twoColumnLayout";
      console.log('pose : 2', pose)
    }
    if (columns === 3) {
      pose = "threeColumnLayout";
      console.log('pose: 3', pose)
    }
    return (
      <Container pose={pose}>
  <StyledSidebarPane key={1}>
  {this.renderTypeOf(Layout.Sidebar)}
  </StyledSidebarPane>
  <StyledNoteListPane key={2}>
  {this.renderTypeOf(Layout.NoteList)}
  </StyledNoteListPane>
  <StyledEditorPane key={3}>
  {console.log(Layout.Editor)}
  {this.renderTypeOf(Layout.Editor)}
  </StyledEditorPane>
  </Container>
      );
    }
  }
  
  export default Layout;