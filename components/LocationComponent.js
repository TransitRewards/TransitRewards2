import React, { useEffect, useState } from "react";
// import AddressInput from "./AddressInput";
import {getLatLong} from "../services/LocationUtil";
// import Map from "./Map";
import dynamic from "next/dynamic";


const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

const Location = () => {
  const [latLon, setLatLon] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [address, setAddress] = useState("");

  const [onClickMap, setOnClickMap] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
	console.log(getLatLong(address));
    setLatLon(getLatLong(address));
    setLat(latLon["lat"]);
    setLon(latLon["lon"]);
	setOnClickMap(true);
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
      {onClickMap ? <MapWithNoSSR loc={{"lat":0, "lng":0}} /> : <p>Type in Map</p> }
    </div>
  );
};

export default Location;
