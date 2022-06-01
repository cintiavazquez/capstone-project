import useStore from '../../useStore/useStore';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';
import Typography from '../../UI/Typography';
import { getIcon } from './getIcons';

export default function ReviewsMap() {
	const reviews = useStore(state => state.reviews);

	return (
		<MapContainer
			scrollWheelZoom="center"
			className="custom-popup"
			style={{ height: '40vh', width: '100%' }}
			center={[52.5, 13.4]}
			zoom={6}
			zIndex={0}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{reviews.map(review => {
				return (
					<Marker
						key={review.id}
						position={[review.location.lat, review.location.long]}
						icon={getIcon(review.rating)}
					>
						<Popup>
							<Typography color="var(--text-light)">
								{review.location.geoname}
							</Typography>
							{review.name}
						</Popup>
					</Marker>
				);
			})}
			<LocationMarker />
		</MapContainer>
	);
}
