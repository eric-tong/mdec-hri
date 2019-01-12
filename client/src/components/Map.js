import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapStyle } from '../styles/MapStyle.js';
import DroneMarker from './DroneMarker.js';

export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: props.base.latitude,
    longitude: props.base.longitude,
    zoom: 15,
    minZoom: 15,
    maxZoom: 20
  });
  const [drones, setDrones] = useState([]);

  const fetchDrones = () => fetch('graphql', {
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
    const id = setInterval(fetchDrones, 2000);
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