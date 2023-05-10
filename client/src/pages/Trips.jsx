import { useEffect, useState } from "react";
import * as tripsService from "../services/tripsService";

const Trips = () => {

  const [trips, setTrips] = useState([]);
  const [totalPages, setTotalPages] = useState([]);


  useEffect(() => {
    tripsService
      .getAll()
      .then(res => {
        setTotalPages(res[1]); 
        setTrips(res[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
 
    <p></p>

  );
};

export default Trips;