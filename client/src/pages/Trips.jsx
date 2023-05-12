import { useEffect, useState } from "react";
import * as tripsService from "../services/tripsService";

const Trips = () => {

  const [trips, setTrips] = useState([]);
  const [totalPages, setTotalPages] = useState([]);


  useEffect(() => {
    tripsService
      .getAll()
      .then(res => {
        setTotalPages(Math.floor(res[1])); 
        setTrips(res[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <ol>
          {trips.map(trip => 
            <li>
              {trip.departureStationName}, 
              {trip.returnStationName}, 
              {trip.coveredDistanceM}, 
              {trip.durationSec}
            </li>)}
        </ol>
      </div>
      <div>
        <p>{totalPages}</p>
      </div>
    </div>
  );
};

export default Trips;