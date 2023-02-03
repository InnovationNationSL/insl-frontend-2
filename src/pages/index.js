import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./home/home";
import ExpertsPage from "./partners/expertsPage";
import Resources from "./resources/Resources";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Navbar from "./components/Navbar/navbar";
import Team from "./team/team";
import Provincials from "./provincials/provincials";
import Articles from "./articles/articles";
const App = () => {

  // const [isOpen, setIsOpen] = useState(false);

  // function toggle() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="">
      <head>
        <title>INSL | 2022 | Web Portal</title>
        <style>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </style>
      </head>

      
      {/* <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </div> */}

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/team" element={<Team />} />
          <Route path="/provincials" element={<Provincials />} />

        </Routes>
      </Router>
    </div>
  );
}


export default App;