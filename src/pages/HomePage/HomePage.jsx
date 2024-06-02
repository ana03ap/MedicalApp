import React, { useContext } from "react";
import "../HomePage/index.css";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Nav />

      <div class="row">
        <div id="section1" class="column">
          <img src="../../../img/homepage1.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div id="section2" class="column">
          <img src="../../../img/homepage2.jpg" alt="" />
        </div>
      </div>
      <div class="row">
        <div id="section3" class="column">
          <img src="../../../img/homepage3.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
