import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function VietnamMap() {
  // Tọa độ trung tâm Việt Nam
  const center: [number, number] = [14.0583, 108.2772]; // <-- sửa đây

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: '400px', width: '200%' }}
      scrollWheelZoom={true} // thêm tùy chọn này nếu muốn zoom bằng scroll
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Đây là Việt Nam!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default VietnamMap;
