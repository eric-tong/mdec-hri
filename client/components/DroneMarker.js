import React from 'react';
import {BaseControl} from 'react-map-gl';

export default class DroneMarker extends BaseControl {
  _render() {
    const {longitude, latitude} = this.props;

    const coords = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      position: 'absolute',
      background: '#fff',
      left: coords[0],
      top: coords[1]
    };
    
    if (!this._context.isDragging)
      markerStyle.transition = 'left 200ms, top 200ms';

    return (
      <div ref={this._containerRef}
        style={markerStyle}>
        ({longitude}, {latitude})
      </div>
    );
  }
}