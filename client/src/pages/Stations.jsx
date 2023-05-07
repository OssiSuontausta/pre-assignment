import { useEffect, useState } from "react";
import * as stationsService from "../services/stationsService";

const Stations = () => {

  const [stations, setStations] = useState([]);

  useEffect(() => {
    stationsService
      .getAll()
      .then(res => setStations(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>Stations</div>
      <div>
        {stations.map(station => 
          <li key={station._id}>{station.name}</li>
        )}
      </div>
    </>
  );
};

export default Stations;