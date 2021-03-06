import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';
import LeafletControlGeocoder from './LeafletControlGeocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import useStore from '../../useStore/useStore';

export default function FormMap() {
	const editmode = useStore(state => state.editmode);
	const locationEdit = useStore(state => state.locationEdit);

	return (
		<MapContainer
			scrollWheelZoom="center"
			className="custom-popup"
			style={{ height: '20vh', width: '100%' }}
			center={editmode ? locationEdit : [52.5, 13.4]}
			zoom={editmode ? 18 : 6}
			zIndex={0}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LeafletControlGeocoder />
			<LocationMarker />
		</MapContainer>
	);
}
