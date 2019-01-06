import React from 'react';
import { BaseControl } from 'react-map-gl';

export default class DroneMarker extends BaseControl {
  _render() {
    const { longitude, latitude, bearing } = this.props.drone;

    const coords = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      left: coords[0],
      top: coords[1],
      transform: `rotateZ(${bearing}deg)`
    };

    if (!this._context.isDragging)
      markerStyle.transition = 'left 200ms, top 200ms';

    return (
      <div className={'drone-marker'} ref={this._containerRef}
        style={markerStyle} />
    );
  }
}