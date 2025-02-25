import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: 24.4781, // Example latitude
  lng: 90.2465, // Example longitude
};

const GoogleLoaction = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDxXao2w953ViQsGZ6KJc6VoQO54gx8saI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Add a marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleLoaction;
