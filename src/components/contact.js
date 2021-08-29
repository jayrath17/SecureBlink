import React from "react";

import Left from "./contactLeft";
import Right from "./Form";

const ContactPage = () => {
  const handleForm = (e) => {
    console.log("submitedd", e);
  };
  return (
    <div style={{ width: "1920px", textAlign: "center" }}>
      <p
        style={{
          textAlign: "center",
          font: "normal normal normal 25px/34px Noto Sans",
          color: "#01CB63"
        }}
      >
        Contact Us
      </p>
      <p
        style={{
          textAlign: "center",
          font: "normal normal bold 40px/54px Noto Sans",
          color: "#1F2532",
          width: "410px",
          marginLeft: "755px",
          marginBottom: "87px"
        }}
      >
        Reach Out with any question you have
      </p>
      {/* contact page below */}
      <div
        style={{
          width: "1920px",
          height: "959px",
          background: "#F8F9FB 0% 0% no-repeat padding-box",
          marginBottom: "24px"
        }}
      >
        <div style={{ display: "inline-block" }}>
          <Left />
        </div>
        <div style={{ display: "inline-block" }}>
          <p
            style={{
              textAlign: "center",
              color: "#201F23",
              width: "570px",
              height: "68px",
              font: " normal normal bold 25px/34px Noto Sans"
            }}
          >
            Fill up the form and our team will get back to you within 24 hours
          </p>
          <Right onSubmit={handleForm} />
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
