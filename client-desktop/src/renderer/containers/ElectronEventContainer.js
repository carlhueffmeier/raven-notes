import { Component } from 'react';
import { connect } from 'react-redux';
import { actions as themeActions } from '../redux/modules/theme';
import { actions as layoutActions, constants as layoutConstants } from '../redux/modules/layout';
import { actions as authenticationActions } from '../redux/modules/authentication';
const { ipcRenderer } = window.require('electron');

class ElectronEventContainer extends Component {
  componentDidMount() {
    const { toggleDarkMode, changeLayout, signout } = this.props;
    ipcRenderer.on('toggle-dark-mode', () => {
      toggleDarkMode();
    });
    ipcRenderer.on('toggle-layout-1', () => {
      changeLayout(layoutConstants.THREE_COLUMN_LAYOUT);
    });
    ipcRenderer.on('toggle-layout-2', () => {
      changeLayout(layoutConstants.TWO_COLUMN_LAYOUT);
    });
    ipcRenderer.on('toggle-layout-3', () => {
      changeLayout(layoutConstants.ONE_COLUMN_LAYOUT);
    });
    ipcRenderer.on('signout', () => {
      signout();
    });
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = {
  changeLayout: layoutActions.changeLayout,
  toggleDarkMode: themeActions.toggleDarkMode,
  signout: authenticationActions.signout
};

export default connect(
  null,
  mapDispatchToProps
)(ElectronEventContainer);
