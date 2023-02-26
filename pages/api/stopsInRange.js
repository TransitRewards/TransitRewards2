import { busStops } from "./Bus";
import { trainStops } from "@/db/train_stops";

// export function getBusStopsInRange(latitude, longitude, radius) {
//     const busStopsInRange = [];

//     for (let i = 0; i < busData.length; i++) {
//         if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
//             busStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
//         }
//     }

//     return busStopsInRange;
// }
export function getBusStopsInRange(latitude, longitude, radius) {
  const busStopsInRange = [];
  console.log(latitude+" "+longitude+" "+radius)
  for (let key in busStops) {
    
    var element = busStops[key];
    console.log("Distance\t"+distance(element.stop_lat, element.stop_lon, latitude, longitude))
    if (
      distance(element.stop_lat, element.stop_lon, latitude, longitude) <=
      radius
    ) {
      console.log(
        distance(element.stop_lat, element.stop_lon, latitude, longitude)
      );
      busStopsInRange.push({
        name: element.stop_name,
        lat: element.stop_lat,
        lon: element.stop_lon,
      });
    }
  }
  console.log(busStopsInRange);
  return busStopsInRange;
}

export function getTrainStopsInRange(latitude, longitude, radius) {
  const trainStopsInRange = [];

  // trainData.forEach(element => {
  //     if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
  //         trainStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
  //     }
  // });

  // for (let i = 0; i < trainStops.length; i++) {
  //   element = trainStops[i];
  //   if (
  //     distance(element.stop_lat, element.stop_lon, latitude, longitude) <=
  //     radius
  //   ) {
  //     console.log(
  //       distance(element.stop_lat, element.stop_lon, latitude, longitude)
  //     );
  //     trainStopsInRange.push({
  //       name: element.stop_name,
  //       lat: stop_lat,
  //       lon: stop_lon,
  //     });
  //   }
  // }
  for (let key in trainStops) {
    var element = trainStops[key];
    if (
      distance(element.stop_lat, element.stop_lon, latitude, longitude) <=
      radius
    ) {
      console.log(
        distance(element.stop_lat, element.stop_lon, latitude, longitude)
      );
      trainStopsInRange.push({
        name: element.stop_name,
        lat: stop_lat,
        lon: stop_lon,
      });
    }
  }

  return trainStopsInRange;
}

function distance(lat1, lon1, lat2, lon2) {
  const earthRadius = 3961; // Radius of the earth in miles
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c; // Distance in miles
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
