import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';
import DroneMarker from './components/DroneMarker.js';
import {DefaultViewport} from './constants/DefaultViewport.js';

export default function Map() {
  const [viewport, setViewport] = useState(DefaultViewport);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setOffset(offset => offset + 0.0002), 2000);
    return () => clearInterval(id);
  });

  return (<ReactMapGL {...viewport}
      onViewportChange={setViewport}
      mapStyle={MapStyle}
      > 
      <DroneMarker 
      longitude={DefaultViewport.longitude} 
      latitude={DefaultViewport.latitude}
      offset={offset}
      />
      </ReactMapGL>);
}