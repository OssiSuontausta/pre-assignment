import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Stations from "../pages/Stations";
import Trips from "../pages/Trips";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/stations" element={<Stations/>}/>
          <Route path="trips" element={<Trips/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;