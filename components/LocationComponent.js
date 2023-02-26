import React, { useEffect, useState } from "react";
import AddressInput from "./AddressInput";
import getLatLong from "../services/LocationUtil";
import Maps from "./Maps";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./Maps"), {
  ssr: false,
});

const Address = () => {
  const [address, setAddress] = useState("");
  const [windowState, setWindowState] = useState(false);
  useEffect(() => {
	console.log(window);
	if(typeof window !== "undefined")
		setWindowState(true);
	}, [window]);

  const [latlon, setLatLon] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const handleSubmit = (e) => {
    console.log(e);
    setAddress(e.target.value);
    setLatLon(getLatLong(address));
    setLat(latlon[0]);
    setLat(latlon[1]);
  };

  return (
    <div>
      <AddressInput loc={handleSubmit} />
      <MapWithNoSSR>
        {windowState ? (
          <h1>LOADING</h1>
        ) : (
          <Maps lat={lat} lon={lon} />
        )}
      </MapWithNoSSR>
    </div>
  );
};

export default Address;
