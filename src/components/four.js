import React from "react";

import Arr from "../data/four";
const Four = () => {
  console.log(Arr[0].profile.img1);
  const RenderItems = Arr.map((e) => {
    return (
      <div style={{ display: "inline-block", marginRight: "67px" }}>
        <img src={e.profile} alt="alt" />

        <div
          style={{
            position: "relative",
            alignText: "left",
            marginTop: "10px"
          }}
        >
          <img
            style={{ left: "0px", position: "absolute" }}
            src={e.svg}
            alt="alt"
          />
          <p
            style={{
              left: "15px",
              bottom: "-70px",
              float: "left",
              position: "absolute",
              font: "normal normal bold 25px/35px Noto Sans",
              color: "#1F2532",
              marginBottom: "20px"
            }}
          >
            {e.amt}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div
      style={{
        width: "1640px",
        height: "764px",
        left: "140px",
        top: "156px",
        textAlign: "left",
        marginTop: "316px",
        marginLeft: "140px"
      }}
    >
      <p
        style={{
          font: " italic 25px/34px Noto Sans",
          color: "#01CB63"
        }}
      >
        Top Earners
      </p>
      <p
        style={{
          width: "490px",
          font: "normal normal bold 40px/54px Noto Sans",
          color: "#1F2532",
          marginBottom: "70px"
        }}
      >
        Transformng your ideas into reality
      </p>

      <div
        style={{
          display: "flex",
          width: "1708px"
        }}
      >
        <div style={{ marginLeft: "px", display: "inline-block" }}>
          {RenderItems}
        </div>
      </div>
      <div style={{ marginTop: "197px" }}>
        <p
          style={{
            font: "normal normal italic 24px/34px Noto Sans",
            color: "#01CB63"
          }}
        >
          Refer
        </p>
        <p
          style={{
            font: "normal normal bold 40px/54px Noto Sans",
            color: "#1F2532"
          }}
        >
          How it's Work
        </p>
      </div>
    </div>
  );
};

export default Four;
