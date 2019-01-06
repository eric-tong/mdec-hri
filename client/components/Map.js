import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapStyle } from '../styles/MapStyle.js';
import DroneMarker from './DroneMarker.js';
import { defaultViewport } from '../../common/defaultViewport';

export default function Map() {
  const [viewport, setViewport] = useState(defaultViewport);
  const [offset, setOffset] = useState([0, 0]);
  const [bearing, setBearing] = useState(0);
  const radius = 0.003;

  useEffect(() => {
    const id = setInterval(() => {
      const newBearing = bearing + 10;
      const newOffsetX = -radius * Math.cos(newBearing / 180 * Math.PI);
      const newOffsetY = radius * Math.sin(newBearing / 180 * Math.PI);
      setBearing(newBearing);
      setOffset([newOffsetX, newOffsetY]);
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <ReactMapGL {...viewport}
      onViewportChange={setViewport}
      mapStyle={MapStyle}>
      <DroneMarker
        longitude={defaultViewport.longitude + offset[0]}
        latitude={defaultViewport.latitude + offset[1]}
        bearing={bearing} />
    </ReactMapGL>
  );
}