import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapStyle } from '../styles/MapStyle.js';
import DroneMarker from './DroneMarker.js';
import { defaultViewport } from '../../common/defaultViewport';

export default function Map() {
  const [viewport, setViewport] = useState(defaultViewport);
  const [drones, setDrones] = useState([]);

  const fetchDrones = () => fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{ 
        drones {
          id 
          longitude
          latitude
          bearing 
        } 
    }` }),
  }).then(res => res.json())
    .then(res => setDrones(res.data.drones));

  useEffect(() => {
    const id = setInterval(fetchDrones, 1000);
    return () => clearInterval(id);
  });

  return (
    <ReactMapGL {...viewport}
      onViewportChange={setViewport}
      mapStyle={MapStyle}>
      {drones.map(drone => <DroneMarker key={drone.id} drone={drone} />)}
    </ReactMapGL>
  );
}