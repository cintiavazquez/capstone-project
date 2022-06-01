import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';

export default function Map() {
	const positions = [];
	return (
		<MapContainer
			scrollWheelZoom
			style={{ height: '40vh', width: '100%' }}
			center={[52.5, 13.4]}
			zoom={6}
			zIndex={0}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{positions.map(position => {
				return (
					<Marker key={position.id} position={[position.lat, position.long]}>
						<Popup>{position.name}</Popup>
					</Marker>
				);
			})}
			<LocationMarker />
		</MapContainer>
	);
}
