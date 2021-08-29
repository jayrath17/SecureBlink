import React from "react";

import img from "../Icons/right-quotation-sign.svg";

const Six = () => {
  return (
    <div
      style={{
        width: "1640px",
        height: "764px",
        left: "140px",
        textAlign: "left",
        marginLeft: "140px"
      }}
    >
      <p
        style={{
          font: "normal normal italic 25px/34px Noto Sans",
          color: "#01CB63"
        }}
      >
        Testimonials
      </p>
      <p
        style={{
          width: "494px",
          font: "normal normal bold 40px/54px Noto Sans",
          color: "#1F2532",
          marginBottom: "px"
        }}
      >
        Check out What Our Students Think About Us
      </p>
      {/* card below */}
      <div
        style={{
          width: "756px",
          height: "354px",
          background: " #FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: " 0px 20px 30px #1F25321A",
          borderRadius: "15px",
          marginLeft: "39px",
          display: "inline-block"
        }}
      >
        <div>
          <p
            style={{
              width: "664px",
              height: "171px",
              paddingLeft: "45px",
              paddingTop: "68px",
              marginBottom: "115px",
              font: " normal normal italic 23px/35px Noto Sans",
              letterSpacing: "0px",
              color: "#86919D"
            }}
          >
            It's a comprehensive online learning platform for everyone looking
            to learn and course pro. provinding this platform which is very
            beneficial for practicals. Students can revise everything at home
            like dissection and slides
          </p>
        </div>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "664px",
            paddingLeft: "45px"
          }}
        >
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src="https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.jpg"
            alt="adf"
          />
          <p
            style={{
              display: "inline-block",
              position: "absolute",
              font: "normal normal bold 20px/27px Noto Sans",

              color: "#1F2532"
            }}
          >
            Albert Hitler
          </p>
          <p
            style={{
              left: "96px",
              top: "23px",
              display: "inline-block",
              position: "absolute",
              font: "normal normal bold 14px Noto Sans",

              color: "#86919D"
            }}
          >
            Yesterday
          </p>

          <img
            style={{
              right: "0px",
              display: "inline-block",
              position: "absolute"
            }}
            src={img}
            alt="quote"
          />
        </div>
      </div>
      {/*
       */}
      <div
        style={{
          width: "756px",
          height: "354px",
          background: " #FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: " 0px 20px 30px #1F25321A",
          borderRadius: "15px",
          marginLeft: "39px",
          display: "inline-block"
        }}
      >
        <div>
          <p
            style={{
              width: "664px",
              height: "171px",
              paddingLeft: "45px",
              paddingTop: "68px",
              marginBottom: "115px",
              font: " normal normal italic 23px/35px Noto Sans",
              letterSpacing: "0px",
              color: "#86919D"
            }}
          >
            It's A Comprehensive Online Learning Platform For Everyone Looking
            To Learn And Course Pro. Provinding This Platform Which Is Very
            Beneficial For Practicals. Students Can Revise Everything At Home
            Like Dissection And Slides.
          </p>
        </div>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "664px",
            paddingLeft: "45px"
          }}
        >
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src="https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.jpg"
            alt="adf"
          />
          <p
            style={{
              display: "inline-block",
              position: "absolute",
              font: "normal normal bold 20px/27px Noto Sans",

              color: "#1F2532"
            }}
          >
            Rajkumar Jain
          </p>
          <p
            style={{
              left: "96px",
              top: "23px",
              display: "inline-block",
              position: "absolute",
              font: "normal normal bold 14px Noto Sans",

              color: "#86919D"
            }}
          >
            Yesterday
          </p>

          <img
            style={{
              right: "0px",
              display: "inline-block",
              position: "absolute"
            }}
            src={img}
            alt="quote"
          />
        </div>
      </div>
    </div>
  );
};
export default Six;
