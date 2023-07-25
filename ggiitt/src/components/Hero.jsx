import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";

const Hero = ({ data }) => {
  return (
    <><Navbar/>
    <div>
      <section>
        <div className="hero">
          <div className="container">
            <Card data={data} />
          </div>
        </div>
      </section>
    </div><Aboutus/></>
  );
};

export default Hero;