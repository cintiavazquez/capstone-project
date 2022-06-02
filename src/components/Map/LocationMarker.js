import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { getIcon } from './getIcons';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const { asPath } = useRouter();

	const map = useMapEvents({
		locationfound(e) {
			setPosition(e.latlng);
			{
				asPath == '/' && map.flyTo(e.latlng, 14);
			}
			{
				asPath == '/post' && map.panTo(e.latlng) && map.setZoom(12);
			}
		},
	});

	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : asPath == '/' ? (
		<Marker position={position} icon={getIcon('Default')}>
			<Popup>You are here</Popup>
		</Marker>
	) : null;
}
