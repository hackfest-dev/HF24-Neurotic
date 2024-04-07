import { useState } from "react";
import { Marker } from "react-leaflet";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useStateStore } from "~/store";
interface MapProps {
  lat: number;
  long: number;
}

const Map: React.FC<MapProps> = ({ lat, long }) => {
  const [markers, setMarkers] = useState<{ lat: number; long: number }[]>([]);
  const position: [number, number] = [lat, long];
  const { setLatitude, setLongitude } = useStateStore();

  // const setAddEventOpen = useStateStore((state) => state.setAddEventOpen);

  // Define a custom icon
  const customIcon = new L.Icon({
    iconUrl: "/bus.png",
    iconSize: [200, 200],
  });

  const AddMarkerOnClick = () => {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarkers([...markers, { lat, long: lng }]);
        setLatitude(lat);
        setLongitude(lng);
      },
    });

    return null;
  };

  return (
    <MapContainer
      style={{ width: "100%", height: "100dvh", zIndex: 0 }}
      center={position}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker key={"you"} position={[lat, long]} icon={customIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
