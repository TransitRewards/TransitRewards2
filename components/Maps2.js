import { useState, useEffect } from 'react';
import BingMapsReact from "bingmaps-react";

import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

const Maps2 = () => {
  const center = [48.856614, 2.3522219];
  const zoom = 12;

  return (
    <Map center={center} zoom={zoom} width={600} height={400}>
      <Marker anchor={center} payload={1} />
    </Map>
  );
};

export default Maps2;