import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';
import {DefaultViewport} from './constants/DefaultViewport.js';

export default function Map() {
  const [viewport, setViewport] = useState(DefaultViewport);

  return (<ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapStyle={MapStyle}
      />);
}