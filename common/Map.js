import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
    viewport: {
      width: '100%',
      height: '100vh',
      latitude: 51.7520,
      longitude: -1.2577,
      zoom: 16
    }
    };
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle={MapStyle}
      />
    );
  }
}