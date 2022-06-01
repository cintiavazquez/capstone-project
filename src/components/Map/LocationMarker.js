import { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, 14);
		},
	});

	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}
