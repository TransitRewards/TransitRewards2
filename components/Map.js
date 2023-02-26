import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

export function ChangeView({ coords }) {
  console.log("hereeeeeeeeee")
  const map = useMap();
  console.log(coords.lat+" "+coords.lng);
  map.setView(coords, 12);
  return null;
}

export default function Map(props) {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center = [props.loc.lat, props.loc.lng];

  return (
    <MapContainer center={center} zoom={12} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}