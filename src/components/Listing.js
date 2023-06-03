import React from "react";
import moon from "../pic/moon.png";
import sun from "../pic/sun.png";
import shark from "../pic/shark.jpg";
import boat from "../pic/boat.png";

const Listing = () => {
  return (
    <div className="mamacard">
      <div className="grid">
        <div className="card">
          <div className="bg"></div>
          <div className="cntnt">
            <p className="category">Category</p>
            <h3 className="exp">Example</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg"></div>
          <div className="cntnt">
            <p className="category">Category</p>
            <h3 className="exp">Example</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg"></div>
          <div className="cntnt">
            <p className="category">Category</p>
            <h3 className="exp">Example</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg"></div>
          <div className="cntnt">
            <p className="category">Category</p>
            <h3 className="exp">Example</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
