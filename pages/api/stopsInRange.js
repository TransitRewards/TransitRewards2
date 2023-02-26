var busData = require('../../external/bus.json');
var trainData = require('../../external/train.json');

export function getBusStopsInRange(latitude, longitude, radius) {
    const busStopsInRange = [];

    // busData.forEach(element => {
    //     if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
    //         busStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
    //     }
    // });

    for (let i = 0; i < busData.length; i++) {
        if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
            busStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
        }
    }

    return busData;
}

export function getTrainStopsInRange(latitude, longitude, radius) {
    const trainStopsInRange = [];

    // trainData.forEach(element => {
    //     if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
    //         trainStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
    //     }
    // });

    for (let i = 0; i < trainData.length; i++) {
        if (distance(element.stop_lat, element.stop_lon, latitude, longitude) <= radius) {
            console.log(distance(element.stop_lat, element.stop_lon, latitude, longitude));
            trainStopsInRange.push({name: element.stop_name, lat: stop_lat, lon: stop_lon});
        }
    }

    return trainData;
}

function distance(lat1, lon1, lat2, lon2) {
    const earthRadius = 3961; // Radius of the earth in miles
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in miles
    return distance;
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180);
}