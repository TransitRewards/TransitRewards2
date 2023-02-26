import React, { useEffect, useState } from "react";
// import AddressInput from "./AddressInput";
import getLatLong from "../services/LocationUtil";
// import Map from "./Map";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

const Location = () => {
  const [latLong, setLatLon] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
	console.log(getLatLong(address));
    setLatLon(getLatLong(address));
    setLat(latlon[0]);
    setLat(latlon[1]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Enter your address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
        />
        <button type="submit">Submit</button>
      </form>
      <MapWithNoSSR lat={lat} lon={lon} />
    </div>
  );
};

export default Location;
