import React, { useState, useEffect } from 'react';
import { Marker } from 'react-map-gl';
import { graphqlFetch } from '../utils/graphqlFetch';

export default function TargetMarker({ id }) {
  const [target, setTarget] = useState({ longitude: 0, latitude: 0 });

  const fetchTargets = () => {
    graphqlFetch('query($id: ID!) {drone(id: $id) {id targetLongitude targetLatitude}}', {id})
      .then(data => data.drone)
      .then(drone => ({ longitude: drone.targetLongitude, latitude: drone.targetLatitude }))
      .then(setTarget);
  }

  useEffect(() => {
    fetchTargets();
  }, [id]);

  const onDragEnd = ({ lngLat }) => {
    setTarget({ longitude: lngLat[0], latitude: lngLat[1] });
    graphqlFetch(`mutation { setTarget(id: ${id}, latitude: ${lngLat[1]}, longitude: ${lngLat[0]}) }`);
  }

  return <Marker {...target} draggable onDragEnd={onDragEnd} className="target-marker" />
}