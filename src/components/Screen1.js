import React, { useEffect } from "react";
import stage from "../assests/images/awardPlatform.png";
import girl from "../assests/images/girlClap.png";
import castingLogo from "../assests/images/castingLogo.png";

import "../styles/screen1.css";

const Screen1 = ({ navigateToScreen2 }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToScreen2();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigateToScreen2]);
  return (
    <>
      <div className="mobile">
        <div className="stage">
          <img src={stage} alt="" />
        </div>
        <div className="girl">
          <img src={castingLogo} alt="" className="casting" />
          <h3
            className="text-count"
            style={{ color: "white", marginBottom: "50px" }}
          >
            The Results R In!
          </h3>
          <img src={girl} alt="" className="girl-img" />
        </div>
      </div>
    </>
  );
};

export default Screen1;
