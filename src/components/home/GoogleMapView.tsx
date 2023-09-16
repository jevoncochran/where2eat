import { UserLocationContext } from "@/context/UserLocationContext";
import {
  LoadScript,
  GoogleMap,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";
import React, { useContext } from "react";

const GoogleMapView = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };

  const coordinates = {
    lat: 37.804363,
    lng: -122.271111,
  };

  if (!isLoaded) return null;

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation}
          zoom={15}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: { width: 50, height: 50 },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
