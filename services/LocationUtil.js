import { APIKEY } from "API";

export async function getLatLong(str) {
	// console.log(APIKEY);
    var url = 'https://api.geoapify.com/v1/geocode/search?text=' + str + '&apiKey=' + APIKEY;
    
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            const a = { "coords": { "lat": responseJson["features"][0]["properties"]["lat"], "lon": responseJson["features"][0]["properties"]["lon"] } };
            return a;
        });
}