import React from "react";
import img1 from "../Icons/Group 10750.svg";
import img2 from "../Icons/Group 10749.svg";
import img3 from "../Icons/Group 10748.svg";
import img4 from "../Icons/Facebook.svg";
import img5 from "../Icons/twitter.svg";
import img6 from "../Icons/Github.svg";
import img7 from "../Icons/Linkedin.svg";

const Left = () => {
  return (
    <div style={{ width: "918px", height: "909px", textAlign: "left" }}>
      <p
        style={{
          paddingTop: "90px",
          marginBottom: "84px",
          marginLeft: "255px",
          font: "normal normal bold 35px/34px Noto Sans",
          color: "#201F23"
        }}
      >
        Contact Information
      </p>
      <div style={{ marginBottom: "59px", marginLeft: "245px" }}>
        <img
          src={img1}
          alt="img1"
          style={{ width: "92px", height: "92px", display: "inline-block" }}
        />
        <p
          style={{
            display: "inline-block",
            marginTop: "15px",
            position: "absolute",
            width: "332px",
            font: "normal normal bold 25px/34px Noto Sans",
            color: "#201F23",
            textAlign: "left"
          }}
        >
          contact@coursepro.com
        </p>
      </div>
      <div style={{ marginBottom: "59px", marginLeft: "245px" }}>
        <img
          src={img2}
          alt="img1"
          style={{ width: "92px", height: "92px", display: "inline-block" }}
        />
        <p
          style={{
            display: "inline-block",
            marginTop: "15px",
            position: "absolute",
            width: "332px",
            textAlign: "left",
            font: "normal normal bold 25px/34px Noto Sans",
            color: "#201F23"
          }}
        >
          1800-562-895, 1800-869-877
        </p>
      </div>
      <div style={{ marginBottom: "105px", marginLeft: "245px" }}>
        <img
          src={img3}
          alt="img1"
          style={{ width: "92px", height: "92px", display: "inline-block" }}
        />
        <p
          style={{
            display: "inline-block",
            marginTop: "15px",
            position: "absolute",
            width: "332px",
            font: "normal normal bold 25px/34px Noto Sans",
            color: "#201F23",
            textAlign: "left"
          }}
        >
          102 Street, India
        </p>
      </div>
      <div
        style={{
          marginBottom: "60px",
          marginLeft: "255px",
          font: "normal normal bold 35px/34px  Noto Sans",
          color: "#201F23",
          textAlign: "left"
        }}
      >
        Social Media Channel
      </div>
      <div style={{ marginLeft: "258px" }}>
        <img
          src={img4}
          alt="img1"
          style={{
            width: "57px",
            height: "57px",
            display: "inline-block",
            marginRight: "54px"
          }}
        />
        <img
          src={img5}
          alt="img1"
          style={{
            width: "57px",
            height: "57px",
            display: "inline-block",
            marginRight: "54px"
          }}
        />
        <img
          src={img6}
          alt="img1"
          style={{
            width: "57px",
            height: "57px",
            display: "inline-block",
            marginRight: "54px"
          }}
        />
        <img
          src={img7}
          alt="img1"
          style={{
            width: "57px",
            height: "57px",
            display: "inline-block",
            marginRight: "54px"
          }}
        />
      </div>
    </div>
  );
};
export default Left;
