import React, { useEffect, useState } from "react";
import stage from "../assests/images/awardPlatform.png";
import girl from "../assests/images/girlClap.png";
import heart from "../assests/images/main-heart.png";
import arrow from "../assests/images/arrow.png";
import "../styles/screen2.css";

const Screen2 = ({ navigateToScreen3 }) => {
  const [profileAnimation, setProfileAnimation] = useState(false);

  useEffect(() => {
    setProfileAnimation(true);

    const timeout = setTimeout(() => {
      navigateToScreen3();
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigateToScreen3]);

  const handleArrowClick = () => {
    navigateToScreen3();
  };
  return (
    <>
      {profileAnimation ? (
        <div className="mobile">
          <div className="profile-animation">
            <div className="text-profile">
              <div className="profile"></div>
              <div>
                <h2>D-Lister</h2>
                <br />
                <h4>sally</h4>
              </div>
            </div>
          </div>

          <div className="stage">
            <img src={stage} alt="" />
          </div>

          <div className="girl">
            <img src={heart} alt="" className="heart" />
            <div className="text-count">
              <h3 style={{ color: "white" }}>15000</h3>
            </div>
            <img src={girl} alt="" />
          </div>
        </div>
      ) : null}

      <div
        style={{
          border: "none",
          background: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "end",
          marginBottom: "50px",
        }}
      >
        <button
          onClick={handleArrowClick}
          style={{ border: "none", background: "none" }}
        >
          <img
            style={{ width: "50%", cursor: "pointer" }}
            src={arrow}
            alt=""
          ></img>
        </button>
      </div>
    </>
  );
};

export default Screen2;
