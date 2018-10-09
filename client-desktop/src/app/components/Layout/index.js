import React, { Component, Fragment } from 'react';
import { Container, Pane } from './styles';

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
    if (columns === 3) {
      return (
        <Container>
          <Pane width="20%">{this.renderTypeOf(Layout.Sidebar)}</Pane>
          <Pane width="20%">{this.renderTypeOf(Layout.NoteList)}</Pane>
          <Pane width="60%">{this.renderTypeOf(Layout.Editor)}</Pane>
        </Container>
      );
    }
    if (columns === 2) {
      return (
        <Container>
          <Pane width="20%">{this.renderTypeOf(Layout.Sidebar)}</Pane>
          <Pane width="80%">{this.renderTypeOf(Layout.NoteList)}</Pane>
        </Container>
      );
    }
    if (columns === 1) {
      return (
        <Container>
          <Pane width="100%">{this.renderTypeOf(Layout.Editor)}</Pane>
        </Container>
      );
    }
  }
}

export default Layout;
