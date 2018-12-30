import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';
import {DefaultViewport} from './constants/DefaultViewport.js';

export default function Map() {
  const [viewport, setViewport] = useState(DefaultViewport);

  const onViewportChange = viewport => {
    if (viewport.zoom >= 15) setViewport(viewport);
  }

  return (<ReactMapGL
      {...viewport}
      onViewportChange={onViewportChange}
      mapStyle={MapStyle}
      />);
}