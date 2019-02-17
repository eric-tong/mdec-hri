import React from 'react';
import { Marker } from 'react-map-gl';
import { graphqlFetch } from '../utils/graphqlFetch';

export default function TargetMarker({ target }) {
  return <Marker {...target} draggable onDragEnd={onDragEnd} className="target-marker" />
}

function onDragEnd({ lngLat }) {
  graphqlFetch(`mutation { setTarget(id: "0", latitude: ${lngLat[1]}, longitude: ${lngLat[0]}) }`);
}