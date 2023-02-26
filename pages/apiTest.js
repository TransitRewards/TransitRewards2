import { useState } from "react"
// import getTrainStopsInRange from "./api/stopsInRange"
import {getBusStopsInRange, getTrainStopsInRange} from "./api/stopsInRange"

export default function location() {
    // const [busStops, setBusStops] = useState({})
    // const [trainStations, setTrainStations] = useState({})
    // setBusStops(getBusStopsInRange(40.828402,-74.1031517,1))
    // setTrainStations(getTrainStopsInRange(40.828402,-74.1031517,1))

	// return (
	// 	<div>  
    //         <h1>Bus Stops</h1>

    //         <p>{busStops}</p>
    //         <hline/>

    //         <h1> Train Stations</h1>
    //         <p>{trainStations}</p>
    //     </div>
	// )

    console.log(getTrainStopsInRange(40.828402,-74.1031517,1.0));
    // console.log(getBusStopsInRange(40.828402,-74.1031517,1.0));
}