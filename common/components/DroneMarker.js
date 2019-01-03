import React from 'react';
import {Marker} from 'react-map-gl';

export default function DroneMarker(props) {
	return (
	<Marker
	latitude={props.latitude} 
	longitude={props.longitude}
	offsetLeft={props.offset} >
		<div>Wow</div>
	</Marker>);
}