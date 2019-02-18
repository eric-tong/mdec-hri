import React from 'react';
import { Marker } from 'react-map-gl';
import { graphqlFetch } from '../utils/graphqlFetch';

export default function TargetMarker({ target }) {
  const onDragEnd = ({ lngLat }) => {
    graphqlFetch(`mutation { setTarget(id: ${target.id}, latitude: ${lngLat[1]}, longitude: ${lngLat[0]}) }`);
  }

  return <Marker {...target} draggable onDragEnd={onDragEnd} className="target-marker" />
}