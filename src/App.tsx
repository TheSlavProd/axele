import "./App.css";
import AdminRoute from "./components/AdminRoute";

import { Home } from "./pages/public/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/public/Login";
import { Registration } from "./pages/public/Registration";

import { AddDriver } from "./pages/private/AddDriver/AddDriver";
import { AddTractor } from "./pages/private/AddTractor/AddTractor";
import { AddTrailer } from "./pages/private/AddTrailer/AddTrailer";
import { AddAddress } from "./pages/private/AddAdress/AddAddress";
import { Profile } from "./pages/private/Profile/Profile";
import { Drivers } from "./pages/private/Drivers";
import { Tractors } from "./pages/private/Tractors";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<AdminRoute />}>
          <Route path="/addDriver" element={<AddDriver />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/addTractors" element={<AddTractor />} />
          <Route path="/tractors" element={<Tractors />} />
          <Route path="/addTrailer" element={<AddTrailer />} />
          <Route path="/addAddress" element={<AddAddress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Profile />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
