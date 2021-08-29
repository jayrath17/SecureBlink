import React from "react";
import Group3 from "../Icons/Group 3.svg";
const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          textAlign: "left",
          font: "  normal normal normal 30px/50px Noto Sans",
          letterSpacing: "0px",
          color: "#1F2532",
          marginLeft: "140px",
          marginTop: "42px",
          marginBottom: "41px"
        }}
      >
        {" "}
        <img style={{ display: "flex" }} src={Group3} alt="pic" />
        <button
          style={{ marginLeft: "1172px", border: "none", background: "white" }}
        >
          Login
        </button>{" "}
        <button
          style={{
            marginLeft: "56px",
            background: "#01CB63 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            boxShadow: " 0px 5px 15px #01CB6359",
            border: "none"
          }}
        >
          <p
            style={{
              font: "normal normal normal 20px/27px Noto Sans",
              color: "white"
            }}
          >
            Register
          </p>
        </button>
      </div>
    </div>
  );
};
export default Header;
