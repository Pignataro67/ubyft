import React, { Component } from 'react';
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute';
import CardLabel from '../components/CardLabel';
import Card from '../components/Card';
import * as confirmRouteActions from '../actions/confirmRouteActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ConfirmRouteContainer extends Component {

  render() {
    let cardLabel = "How do I look?"

    return (
      <Card>
        <CardLabel cardLabel={cardLabel} />
        <ConfirmRoute { ...this.props}/>
      </Card>
    )
  }
}

export default ConfirmRouteContainer;