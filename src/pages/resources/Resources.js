import Navbar from "../../components/Navbar/navbar";
import "./style.css";
import YouTube, { YouTubeProps } from "react-youtube";
import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Roadtoinsl from "./components/roadtoinsl/roadtoinsl";
import HustleStories from "./components/hustlestories/hustlestories";
import Workshops from "./components/workshops/workshops";
import Footer from "../../components/Footer/Footer";

function Resources() {
  const [resourceType, setResourceType] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <div className="text-center button-pack">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class={"btn btn-outline-light" + (resourceType === 1 ? " active" : "")} onClick={() => setResourceType(1)}>
              Road to INSL
            </button>
            <button type="button" class={"btn btn-outline-light" + (resourceType === 2 ? " active" : "")} onClick={() => setResourceType(2)}>
              Hustle Stories
            </button>

            <button type="button" class={"btn btn-outline-light" + (resourceType === 3 ? " active" : "")} onClick={() => setResourceType(3)}>
              Workshops
            </button>

        </div>
      </div>


      {resourceType===1 ? 
        <div className="row">
          <Roadtoinsl/>
        </div>
        : null}

      {resourceType===2 ? 
        <div className="row">
          <HustleStories/>
        </div>
        : null}

      {resourceType===3 ? 
        <div className="row">
          <Workshops/>
        </div>
        : null}

    <Footer />
    </div>
  );
}

export default Resources;
