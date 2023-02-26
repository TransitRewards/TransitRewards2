// const bussinessRef = doc(db, "businesses");
import bus_db from "../db/bus_db";
import train_db from "../db/train_db";

export function getHighestBidTrain(train_id){
	return train_db[train_id];
}
export function getHighestBidBus(bus_id){
	return bus_db[bus_id];
}