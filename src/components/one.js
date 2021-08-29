import React from "react";
import Rectangle25 from "../Icons/studyy.jpg";
const One = () => {
  return (
    <div
      style={{
        width: "1920px",
        height: "783"
      }}
    >
      <div
        style={{
          background: "#01CB63",
          width: "50%",
          float: "left"
        }}
      >
        <div
          style={{
            top: "256px"
          }}
        >
          <p
            style={{
              width: "665px",
              height: "225px",
              marginLeft: "140px",
              textAlign: "left",
              font: "  bold 55px/75px Noto Sans",
              letterSpacing: "0px",
              color: "#FFFFFF",
              textTransform: "capitalize",
              marginTop: "159px",
              marginBottom: "35px"
            }}
          >
            AnyTime, anywhere Learn on your schedule from any device
          </p>
        </div>
        <div style={{}}>
          <p
            style={{
              textAlign: "left",
              width: "667px",
              height: "141px",
              font: "  normal normal normal 30px/50px Noto Sans",
              letterSpacing: "0px",
              color: "#1F2532",
              marginLeft: "140px",
              marginBottom: "35px"
            }}
          >
            We Believe everyone has the capcity to be creative Course Pro is a
            place where people develop their own potential
          </p>
        </div>
        <div
          style={{
            width: "242px",
            height: "50px",
            background: " #000000 0% 0% no-repeat padding-box",
            borderRadius: "10px",

            marginLeft: "140px",
            marginBottom: "138px"
          }}
        >
          <i
            style={{
              width: "160px",
              height: "34px",
              textAlign: "left",
              font: "normal normal normal 25px/50px Noto Sans",
              letterSpacing: "0.5px",
              color: "#FFFFFF"
            }}
          >
            Let's Get Start
          </i>
        </div>
      </div>
      <div>
        <img
          style={{
            background: "#00D768",
            height: "782px",
            width: "50%",
            float: "right"
          }}
          src={Rectangle25}
          alt="Rectangle25"
        />
      </div>
    </div>
  );
};
export default One;
