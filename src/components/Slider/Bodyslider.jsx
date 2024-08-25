import { Images } from "../../images/Images";
import "./Bodyslider.css";

import React from "react";

const Bodyslider = ({className}) => {
  return (
    <div className={`Bodyslider ${className}`} >
      <div className="text-container">
        <h4>Up to 70% off on | Bestselling smartwatches</h4>
      </div>
      <div className="image-container d-flex p-1">
      <img src={Images.sd1} alt="" />
      <img src={Images.sd2} alt="" />
      <img src={Images.sd3} alt="" />
      <img src={Images.sd4} alt="" />
      <img src={Images.sd5} alt="" />
      <img src={Images.sd7} alt="" />
      <img src={Images.sd8} alt="" />
      <img src={Images.sd10} alt="" />
      <img src={Images.sd11} alt="" />
      <img src={Images.sd12} alt="" />
      <img src={Images.sd13} alt="" />
      <img src={Images.sd14} alt="" /></div>
    </div>
  );
};

export default Bodyslider;
