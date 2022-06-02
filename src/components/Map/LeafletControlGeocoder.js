import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';
import { useEffect } from 'react';
import useStore from '../../useStore/useStore';
import { getIcon } from './getIcons';

export default function LeafletControlGeocoder() {
	const updatePositions = useStore(state => state.updatePositions);

	const map = useMap();

	useEffect(() => {
		let geocoder = L.Control.Geocoder.nominatim();
		if (typeof URLSearchParams !== 'undefined' && window.location.search) {
			const params = new URLSearchParams(window.location.search);
			const geocoderString = params.get('geocoder');
			if (geocoderString && L.Control.Geocoder[geocoderString]) {
				geocoder = L.Control.Geocoder[geocoderString]();
			} else if (geocoderString) {
				console.warn('Unsupported geocoder', geocoderString);
			}
		}

		var myMarker = null;

		map.on('click', function (e) {
			var coord = e.latlng;
			updatePositions(coord.lat, coord.lng, 'See on map');

			if (myMarker == null) {
				myMarker = L.marker(
					{ lat: coord.lat, lng: coord.lng },
					{ icon: getIcon('Default') }
				).addTo(map);
			} else {
				myMarker.setLatLng(e.latlng);
			}
		});
		const geocodecontrol = L.Control.geocoder({
			query: '',
			placeholder: 'Search here...',
			defaultMarkGeocode: false,
			geocoder,
		}).on('markgeocode', function (e) {
			var latlng = e.geocode.center;
			L.marker(latlng, { icon: getIcon('Default') })
				.addTo(map)
				.bindPopup(e.geocode.name)
				.openPopup();

			map.fitBounds(e.geocode.bbox);

			updatePositions(latlng.lat, latlng.lng, e.geocode.name);
		});

		geocodecontrol.addTo(map);

		return () => {
			geocodecontrol.remove();
		};
	}, [map, updatePositions]);

	return null;
}
