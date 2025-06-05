import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons issue
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

export default function MapSection({ scales }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-[400px]">
      <h2 className="text-xl font-bold mb-4">Map Visualization</h2>
      <MapContainer center={[-1.2921, 36.8219]} zoom={6} scrollWheelZoom={false} className="h-full w-full rounded-md">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {scales.map(scale => (
          <Marker key={scale.scale_id} position={[scale.latitude, scale.longitude]}>
            <Popup>
              <strong>{scale.scale_id}</strong><br/>
              {scale.location_name}<br/>
              Status: {scale.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
