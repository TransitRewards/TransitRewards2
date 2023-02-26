import React, { useEffect, useState } from "react";
// import AddressInput from "./AddressInput";
import {getLatLong} from "../services/LocationUtil";
// import Map from "./Map";
import dynamic from "next/dynamic";
import styles from '../styles/Location.module.css'
import { getBusStopsInRange, getTrainStopsInRange } from "@/pages/api/stopsInRange";

const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

const Location = () => {
  const [latLon, setLatLon] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [address, setAddress] = useState("");
  const [displayResults, setdisplayResults] = useState(false);

  const [onClickMap, setOnClickMap] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    console.log('b4')
	console.log(getLatLong(address));
    console.log('after')
    setLatLon(getLatLong(address));
    setLat(latLon["lat"]);
    setLon(latLon["lon"]);
	setOnClickMap(true);
  setdisplayResults(true);
  console.log("latitude is "+lat+" and longitude is "+lon);
  console.log(latLon);
  getBusStopsInRange(lat, lon, 2);
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
      {onClickMap ? <MapWithNoSSR loc={{"lat":0, "lng":0}} /> : <p>Type in Map</p> };
      {/* {console.log((getBusStopsInRange(lat,lon,2)))} */}
      {/* {console.log(getBusStopsInRange(40.8268412,-74.1261215,2))} */}
      {/* {(displayResults) ? ((getBusStopsInRange(lat,lon,2)).map((object) => (
        <h1> Bus Stop Name: {object.name}      Highest Bid:   </h1>
        
      ))) : (<></>)} */}

      {/* {console.log("here")} */}
      {/* {console.log(getBusStopsInRange(40.5,-74.5,2))} */}


    </div>
  );
};

export default Location;
