import React from 'react';
import { BaseControl } from 'react-map-gl';

export default class TargetMarker extends BaseControl {
  _render() {
    const { longitude, latitude } = this.props.target;
    const coords = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      left: coords[0],
      top: coords[1]
    };

    return (
      <div className={'target-marker'} ref={this._containerRef}
        style={markerStyle} />
    );
  }
}