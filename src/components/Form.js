import React from "react";
import { reduxForm, Field } from "redux-form";

// ----------------------------------------
const validate = (values) => {
  const errors = {};
  if (!values.Name) {
    errors.Name = "Required";
  } else if (values.Name.length < 2) {
    errors.Name = "Must be 3 characters or more";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.Phone) {
    errors.Phone = "Required";
  } else if (isNaN(Number(values.Phone))) {
    errors.Phone = "Must be a number";
  } else if (values.Phone.length < 10) {
    errors.Phone = "Must be total 10 digits";
  }
  return errors;
};
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        style={{
          border: "none",
          font: "italic normal normal 22px/31px Noto Sans",
          color: "black",
          marginBottom: "18.5px"
        }}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
// ----------------------------------------

function Form(props) {
  const { handleSubmit, pristine, submitting } = props;
  // console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: "left", width: "792.51px", height: "613px" }}>
        {/* 1st Row */}
        <div
          style={{
            display: "inline-block",
            width: "349.11px",
            marginRight: "92.4px",
            height: "110px"
          }}
        >
          <Field
            style={{
              border: "none",
              font: "italic normal normal 22px/31px Noto Sans",
              color: "#F8F9FB",
              marginBottom: "18.5px"
            }}
            name="Name"
            type="text"
            label="Name"
            component={renderField}
          ></Field>
          <div
            style={{
              border: "1px solid #01CB63",
              height: "0px"
            }}
          ></div>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "349.11px",
            height: "110px"
          }}
        >
          <Field
            style={{
              border: "none",
              font: "italic normal normal 22px/31px Noto Sans",
              color: "#86919D",
              marginBottom: "18.5px"
            }}
            name="email"
            component={renderField}
            type="text"
            label="Email"
          ></Field>
          <div
            style={{
              border: "1px solid #01CB63",
              height: "0px",
              marginBottom: "61.5"
            }}
          ></div>
        </div>
        {/* 2nd Row */}
        <div
          style={{
            display: "inline-block",
            width: "349.11px",
            marginRight: "92.4px",
            height: "110px"
          }}
        >
          <Field
            style={{
              border: "none",
              font: "italic normal normal 22px/31px Noto Sans",
              color: "#86919D",
              marginBottom: "18.5px"
            }}
            name="Phone"
            component={renderField}
            type="number"
            label="Phone"
          ></Field>
          <div
            style={{
              border: "1px solid #01CB63",
              height: "0px"
            }}
          ></div>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "349.11px",
            height: "110px"
          }}
        >
          <Field
            style={{
              border: "none",
              font: "italic normal normal 22px/31px Noto Sans",
              color: "#86919D",
              marginBottom: "18.5px"
            }}
            name="name"
            component={renderField}
            type="text"
            label="Subject"
          ></Field>
          <div
            style={{
              border: "1px solid #01CB63",
              height: "0px",
              marginBottom: "61.5"
            }}
          ></div>
        </div>
        {/* 3rd Row */}
        <div
          style={{
            border: "2.3px solid #01CB63",
            width: "792px",
            height: "272px",
            marginBottom: "51px"
          }}
        >
          <Field
            style={{
              border: "none",
              font: "italic normal normal 22px/31px Noto Sans",
              color: "#86919D",
              marginBottom: "18.5px",
              marginLeft: "20px"
            }}
            name="name"
            component={renderField}
            type="text"
            label="Message"
          ></Field>
        </div>
        {/*4th */}
        <div
          style={{
            width: "242px",
            height: "70px",
            background: "#000000 0% 0% no-repeat padding-box",
            textAlign: "center",
            marginLeft: "266.51px"
          }}
        >
          <button
            style={{
              width: "81px",
              height: "34px",
              font: "normal normal normal 25px/50px Noto Sans",
              marginTop: "15px",
              marginLeft: "-10px",
              background: "black"
            }}
            type="submit"
            disabled={pristine || submitting}
          >
            <p style={{ color: "#FFFFFF" }}>Submit</p>
          </button>
        </div>
      </div>
    </form>
  );
}
export default reduxForm({
  form: "Form",
  validate
})(Form);
