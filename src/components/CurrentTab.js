import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RouteList from 'components/RouteList';
import StopList from 'components/StopList';
import Nearby from 'components/Nearby';
import NotFound from 'components/NotFound';


class CurrentTab extends Component {
  static propTypes = {
    tab: PropTypes.string,
  };

  renderTab() {
    const tab = this.props.tab;

    if (tab === RouteList.TAB_NAME) {
      return <RouteList />;
    }
    if (tab === StopList.TAB_NAME) {
      return <StopList />;
    }
    if (tab === Nearby.TAB_NAME) {
      return <Nearby />;
    }
    if (tab === NotFound.TAB_NAME) {
      return <NotFound />;
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.renderTab()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tab: state.routing.tab,
});

export default connect(mapStateToProps)(CurrentTab);
