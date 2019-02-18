import React, { useState, useEffect } from 'react';
import { Marker } from 'react-map-gl';
import { graphqlFetch } from '../utils/graphqlFetch';

export default function TargetMarker({ id }) {
  const [target, setTarget] = useState({ longitude: 0, latitude: 0 });

  useEffect(() => {
    graphqlFetch('{drones {id targetLongitude targetLatitude}}')
      .then(data => data.drones)
      .then(drones => drones.find(drone => drone.id === id))
      .then(drone => ({ longitude: drone.targetLongitude, latitude: drone.targetLatitude }))
      .then(setTarget);
  }, [id]);

  const onDragEnd = ({ lngLat }) => {
    setTarget({ longitude: lngLat[0], latitude: lngLat[1] });
    graphqlFetch(`mutation { setTarget(id: ${id}, latitude: ${lngLat[1]}, longitude: ${lngLat[0]}) }`);
  }

  return <Marker {...target} draggable onDragEnd={onDragEnd} className="target-marker" />
}