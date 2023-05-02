import React from "react";
import Banne from "./components/Header/Banne";
import { Outlet } from "react-router-dom";
import Footer from "./components/Header/Footer";

const App = () => {
  return (
    <div>
      <Banne></Banne>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
