import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {MapStyle} from './styles/MapStyle.js';
import DroneMarker from './components/DroneMarker.js';
import {DefaultViewport} from './styles/DefaultViewport.js';

export default function Map() {
  const [viewport, setViewport] = useState(DefaultViewport);
  const [offset, setOffset] = useState(0);
  const [smoothTransition, setSmoothTransition] = useState(true);

  useEffect(() => {
    // const id = setInterval(() => setOffset(offset => offset + 0.0002), 2000);
    // return () => clearInterval(id);
  });

  const onInteractionStateChange = ({isDragging, isPanning, isRotating, isZooming}) => {
    setSmoothTransition(!isDragging && !isPanning && !isRotating && !isZooming);
  }

  return (<ReactMapGL {...viewport}
      onViewportChange={setViewport}
      onInteractionStateChange={onInteractionStateChange}
      mapStyle={MapStyle}> 
      <DroneMarker 
      longitude={DefaultViewport.longitude + offset} 
      latitude={DefaultViewport.latitude + offset}
      smoothTransition={smoothTransition} />
      </ReactMapGL>);
}