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
	const zoomReview = useStore(state => state.zoomReview);
	console.log(zoomReview);

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

	useEffect(() => {
		map.locate();
	}, [map]);

	useEffect(() => {
		map.flyTo([zoomReview[0].location.lat, zoomReview[0].location.long], 14);
	}, [map, zoomReview]);

	// Versuch 1:
	/* useEffect(() => {
		position !== null && zoomReview[0] !== undefined && zoomReview[0] !== null
			? map.flyTo([zoomReview[0].location.lat, zoomReview[0].location.long], 14)
			: null;
	}, [map, position, zoomReview]); */

	// Versuch 2:
	/* useEffect(() => {
		if (zoomReview[0] === null || zoomReview[0] === undefined) {
			null;
		} else map.flyTo([zoomReview[0].location.lat, zoomReview[0].location.long], 14);
	}, [map, zoomReview]); */

	return position === null ? null : asPath == '/' ? (
		<Marker position={position} icon={getIcon('Default')}>
			<Popup>You are here</Popup>
		</Marker>
	) : null;
}
