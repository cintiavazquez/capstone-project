import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { getIcon } from './getIcons';
import useStore from '../../useStore/useStore';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const { asPath } = useRouter();
	const zoomReview = useStore(state => state.zoomReview);
	const routedZoom = useStore(state => state.routedZoom);
	const routedZoomOff = useStore(state => state.routedZoomOff);

	//routedZoom is a state that gets active when clicking on the location icon in the review cards from the PROFILE page. As there is routing involved, when the profile page takes you to the homepage, the centering on the user's location normally takes precedence over the zooming in the card object from the profile page, which is not what we want to happen in this case. Hence the routedZoom state that gets deactivated 5 seconds after being called.

	const map = useMapEvents({
		locationfound(e) {
			if (asPath === '/' && routedZoom) {
				setTimeout(() => {
					routedZoomOff();
				}, 5000);
			} else if (asPath === '/') {
				map.flyTo(e.latlng, 14);
			}
			setPosition(e.latlng);
		},
	});

	useEffect(() => {
		asPath === '/' && map.locate();
	}, [asPath, map]);

	//This allows the user to click on the marker in the review posts and being taken to the respective location on the map
	useEffect(() => {
		if (asPath === '/') {
			map.flyTo([zoomReview[0].location.lat, zoomReview[0].location.long], 15);
		}
	}, [asPath, map, zoomReview]);

	return position === null ? null : asPath === '/' ? (
		<Marker position={position} icon={getIcon('Default')}>
			<Popup>You are here</Popup>
		</Marker>
	) : null;
}
