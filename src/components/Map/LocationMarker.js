import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { getIcon } from './getIcons';
import useStore from '../../useStore/useStore';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const { asPath } = useRouter();
	const editmode = useStore(state => state.editmode);
	const locEdit = useStore(state => state.locEdit);

	const map = useMapEvents({
		locationfound(e) {
			{
				asPath == '/' && map.flyTo(e.latlng, 14) && setPosition(e.latlng);
			}
			{
				asPath == '/post' && editmode
					? map.panTo(locEdit) && setPosition(locEdit)
					: map.panTo(e.latlng) && map.setZoom(12);
			}
		},
	});
	var card = document.querySelectorAll('.coordinates');

	for (let i = 0; i < card.length; i++) {
		card[i].addEventListener('mouseover', () => {
			map.flyTo([24.7736546, -78.0000547]), 12;
		});
	}

	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : asPath == '/' ? (
		<Marker position={position} icon={getIcon('Default')}>
			<Popup>You are here</Popup>
		</Marker>
	) : null;
}
