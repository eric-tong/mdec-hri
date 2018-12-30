import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 51.7520,
    longitude: -1.2577,
    zoom: 15,
  });

  const onViewportChange = viewport => {
    if (viewport.zoom >= 15) setViewport(viewport);
  }

  return (<ReactMapGL
      {...viewport}
      onViewportChange={onViewportChange}
      mapStyle={MapStyle}
      />);
}