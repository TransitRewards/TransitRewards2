import React, { useState } from "react";
import AddressInput from "./AddressInput";
import getLatLong from "../services/LocationUtil";
import Maps from "../components/Maps";
const Address = () => {
  const [address, setAddress] = useState("");
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
      <Maps lat={lat} lon={lon}>
        Hello
      </Maps>
    </div>
  );
};

export default Address;
