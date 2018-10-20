import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as layoutSelectors } from '../redux/modules/layout';
import LayoutSwitch from '../components/LayoutSwitch';

class LayoutSwitchContainer extends Component {
  render() {
    const { currentLayout } = this.props;
    return <LayoutSwitch currentLayout={currentLayout} />;
  }
}

function mapStateToProps(state) {
  return {
    currentLayout: layoutSelectors.getCurrentLayout(state)
  };
}

export default connect(mapStateToProps)(LayoutSwitchContainer);
