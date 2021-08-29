import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "1920px",
        height: "150px",
        display: "inline-block",
        textAlign: "left",
        font: "normal normal bold 25px/34px Noto Sans",
        color: "#1F2532"
      }}
    >
      <div style={{ marginTop: "58px" }}>
        <p
          style={{
            width: "500px",
            height: "34px",
            display: "inline-block",
            marginLeft: "140px",
            marginRight: "758px"
          }}
        >
          2021-2022 © Course Pro Private Limited
        </p>

        <p
          style={{
            width: "199px",
            height: "34px",
            display: "inline-block"
          }}
        >
          {" "}
          Privacy Policy
        </p>
        <p
          style={{
            width: "250px",
            height: "34px",
            display: "inline-block"
          }}
        >
          Term & Condition{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
