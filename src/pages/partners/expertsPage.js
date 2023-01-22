

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

import "./home.css";

import Experts from "./components/resourcePeople/experts";

const ExpertsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      
      <div className={"dark-overlay"}>
        <Experts />
       
        <Footer />
      </div>
    </div>
  );
};

export default ExpertsPage;
