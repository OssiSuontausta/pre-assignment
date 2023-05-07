import { Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Stations from "../pages/Stations";
import Trips from "../pages/Trips";
import NavBar from "../UI/NavBar";
import Station from "../pages/Station";

const RouterComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/stations/:id" element={<Station />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default RouterComponent;