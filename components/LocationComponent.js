import React, { useEffect, useState } from "react";
// import AddressInput from "./AddressInput";
import {getLatLong} from "../services/LocationUtil";
// import Map from "./Map";
import dynamic from "next/dynamic";
import styles from '../styles/Location.module.css'


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
    <div className = {styles.Contents}>
      <div className = {styles.Header}>
      <p>TransitRewards</p>
      </div>
      <form className = {styles.Submission} onSubmit={handleSubmit}>
        <input
          className= {styles.TextBox}
          type="text"
          id="address"
          placeholder="Enter Address"
          value={address}
          onChange={handleAddressChange}
        />
        <button className = {styles.SubmitButton} type="submit">&#62;</button>
      </form>
      <div className = {styles.MapImage}> 
        {onClickMap ? <MapWithNoSSR loc={{lat:40.5008405, lng:-74.4496061}} /> : <div/> }
      </div>
    </div>
  );
};

export default Location;
