import React, { useContext } from "react";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import Business from "./Business";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

interface MarkerProps {
  business: any;
}

const Marker = ({ business }: MarkerProps) => {
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );

  return (
    <MarkerF
      position={business.geometry.location}
      icon={{
        url: "/circle.png",
        // TODO: Fix this!
        scaledSize: { width: 10, height: 10 },
      }}
      onClick={() => setSelectedBusiness(business)}
    >
      {selectedBusiness?.reference === business.reference ? (
        <OverlayView
          position={business.geometry.location}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="ml-[-90px] mt-[-200px]">
            <Business business={business} showDirections />
          </div>
        </OverlayView>
      ) : null}
    </MarkerF>
  );
};

export default Marker;
