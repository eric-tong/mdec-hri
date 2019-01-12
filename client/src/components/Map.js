import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapStyle } from '../styles/MapStyle.js';
import DroneMarker from './DroneMarker.js';
import { defaultViewport } from '../styles/defaultViewport';
import { graphqlFetch } from '../utils/graphqlFetch.js';

export default function Map() {
  const [viewport, setViewport] = useViewport();
  const drones = useDrones();

  return (
    <ReactMapGL {...viewport}
      onViewportChange={setViewport}
      mapStyle={MapStyle}>
      {drones.map(drone => <DroneMarker key={drone.id} drone={drone} />)}
    </ReactMapGL>
  );
}

function useViewport() {
  const [viewport, setViewport] = useState(defaultViewport);
  if (viewport.longitude === undefined || viewport.latitude === undefined) {
    graphqlFetch('{base {longitude latitude}}')
      .then(data => setViewport(viewport => Object.assign(viewport, data.base)))
  }
  return [viewport, setViewport]
}

function useDrones() {
  const [drones, setDrones] = useState([]);
  const fetchDrones = () =>
    graphqlFetch('{drones {id longitude latitude bearing}}')
      .then(data => setDrones(data.drones));

  useEffect(() => {
    const id = setInterval(fetchDrones, 2000);
    return () => clearInterval(id);
  });

  return drones;
}