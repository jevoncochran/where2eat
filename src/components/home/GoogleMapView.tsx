import React, { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import {
  LoadScript,
  GoogleMap,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";
import Marker from "./Marker";

interface GoogleMapViewProps {
  businesses: any[];
}

const GoogleMapView = ({ businesses }: GoogleMapViewProps) => {
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
              // TODO: Fix this!!!
              scaledSize: { width: 50, height: 50 },
            }}
          />
          {businesses.slice(0, 8).map((business, index) => (
            <Marker key={index} business={business} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
