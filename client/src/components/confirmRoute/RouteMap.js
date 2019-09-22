import React, { Component } from 'react';
import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';
import { Icon } from 'semantic-ui-react';

class RouteMap extends Component {
  state = {
    Map: null
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.mapboxKey && this.props.mapboxKey) {
      this.setState({
        Map: ReactMapBoxGl({
          accessToken: this.props.mapboxKey
        })
      })
    }
  }

  componentDidMount() {
    if(this.props.mapboxKey){
      this.setState({
        Map: ReactMapBoxGl({
          accessToken: this.props.mapboxKey
        })
      })
    }
  }

  render() {
    return ("Hello!")
  }
}

export default RouteMap;