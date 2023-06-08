import React, { useEffect, useState } from "react";
import stage from "../assests/images/awardPlatform.png";
import girl from "../assests/images/girlClap.png";
import heart from "../assests/images/main-heart.png";
import arrow from "../assests/images/arrow.png";

const Screen3 = ({ navigateToScreen1 }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1000;
        if (newCount >= 40000) {
          clearInterval(interval);
          return 40000;
        }
        return newCount;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    navigateToScreen1();
  };
  return (
    <>
      <div className="mobile">
        <div className="stage">
          <img src={stage} alt="" />
        </div>

        <div className="girl">
          <div
            className="text-count"
            style={{
              marginBottom: "50px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "20px" }}>
              For Friends Gave U <br /> Some Love
            </h3>
          </div>
          <img src={heart} alt="" className="heart" />
          <div className="text-count">
            <h3 style={{ color: "white" }}>{count}</h3>
          </div>
          <img src={girl} alt="" />
        </div>
      </div>
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
          style={{
            border: "none",
            background: "none",
          }}
          onClick={handleArrowClick}
        >
          <img
            style={{ width: "40%", cursor: "pointer" }}
            src={arrow}
            alt=""
          ></img>
        </button>
      </div>
    </>
  );
};

export default Screen3;
