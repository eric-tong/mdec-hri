import React from 'react';
import {BaseControl} from 'react-map-gl';

export default class DroneMarker extends BaseControl {
  _render() {
    const {longitude, latitude, offset} = this.props;

    const origin = this._context.viewport.project([longitude, latitude]);
    const coords = this._context.viewport.project([longitude + offset, latitude + offset]);

    const markerStyle = {
      position: 'absolute',
      background: '#fff',
      left: origin[0],
      top: origin[1],
      transform: `translate(${coords[0] - origin[0]}px, ${coords[1] - origin[1]}px)`,
      transition: 'transform 300ms'
    };

    return (
      <div ref={this._containerRef}
        style={markerStyle}>
        ({longitude}, {latitude})
      </div>
    );
  }
}