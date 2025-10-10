import React, { useRef, useState } from "react";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import "./Form.css";
export default function Form() {
  const [fistName1, setFirstName1] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [password1, setPassword1] = useState("");
  const [age1, setAge1] = useState();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const valueBeforeCallback = (e) => {
    console.log("from parent before", e.target.name, ": ", e.target.value);
  };
  const valueAfterCallback = (e) => {
    // console.log("from parent after", e.target.name, ": ", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(ageRef.current.value)
  };
  const validation = () => {
    let newError = {};
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let nameRegex = /^[a-zA-Z]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!formData.email) {
      newError.email = "Please enter an email";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Please write a valid email";
    }

    if (!formData.firstName) {
      newError.firstName = "Please Enter First name";
    } else if (!nameRegex.test(formData.firstName)) {
      newError.firstName = "Please Enter a valid name";
    }

    if (!formData.lastName) {
      newError.lastName = "Please Enter last name";
    } else if (!nameRegex.test(formData.lastName)) {
      newError.lastName = "Please Enter a valid name";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newError.password = "Write correct password";
    }

    console.log("Validation result:", newError);
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = (e) => {
    setFormData({ ...formData, [ageRef.current.name]: ageRef.current.value });

    e.preventDefault();
    if (validation()) {
      console.log("Form data ", formData);
    }
    // setErrors();
    // setFormData("");
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("fist name:", fistName1);
    console.log("last name:", lastName1);

    console.log("email:", email1);

    console.log("phone number:", phone1);

    console.log("password:", password1);
    console.log("Age:", age1);
  };
  const ageRef = useRef(null);

  // console.log(ageRef.current.value)

  return (
    <div className="mainDiv">
      <div className="formD">
        <h2 className="head">Form</h2>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <ControlledInput
              name="fistName"
              type="text"
              placeholder="Enter Your First Name"
              valueBeforeCallback={valueBeforeCallback}
              valueAfterCallback={valueAfterCallback}
              className="inpt"
            />
            {errors.firstName ? (
              <p className="error"> {errors.firstName}</p>
            ) : null}
          </div>
          <div>
            <ControlledInput
              name="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              valueBeforeCallback={valueBeforeCallback}
              valueAfterCallback={valueAfterCallback}
              className="inpt"
            />
            {errors.lastName ? (
              <p className="error"> {errors.lastName}</p>
            ) : null}
          </div>
          <UncontrolledInput
            type="text"
            name="age"
            // value="20"
            ref={ageRef}
            // valueAfterCallback={valueAfterCallback}
            className="inpt"
            placeholder="Enter Your Age"
          />
          <div>
            <ControlledInput
              name="email"
              type="email"
              placeholder="Enter Your Email"
              valueBeforeCallback={valueBeforeCallback}
              valueAfterCallback={valueAfterCallback}
              className="inpt"
            />
            {errors.email ? <p className="error"> {errors.email}</p> : null}
          </div>
          <ControlledInput
            name="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            valueBeforeCallback={valueBeforeCallback}
            valueAfterCallback={valueAfterCallback}
            className="inpt"
          />
          {/* {errors.phone ? <p> {errors.phone }</p> :null} */}
          <div>
            <ControlledInput
              name="password"
              type="password"
              placeholder="Enter Your password"
              valueBeforeCallback={valueBeforeCallback}
              valueAfterCallback={valueAfterCallback}
              className="inpt"
            />
            {errors.password ? <p className="error"> {errors.password}</p> : null}
          </div>
          <button className="gradientBtn">Submit</button>
        </form>
      </div>
      {/* <h3>Form indivisually</h3>
      <form action="" onSubmit={handleSubmit2} className="formDiv">
        <input
          name="fistName1"
          type="text"
          placeholder="Enter Your First Name"
          value={fistName1}
          onChange={(e) => setFirstName1(e.target.value)}
        />
        <input
          name="lastName1"
          type="text"
          placeholder="Enter Your Last Name"
          value={lastName1}
          onChange={(e) => setLastName1(e.target.value)}
        />
        <input
          name="email1"
          type="email"
          placeholder="Enter Your Email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        <input
          name="age1"
          type="number"
          placeholder="Enter Your Age"
          value={age1}
          onChange={(e) => setAge1(e.target.value)}
        />
        <input
          name="phone1"
          type="tel"
          placeholder="Enter Your Phone Number"
          value={phone1}
          onChange={(e) => setPhone1(e.target.value)}
        />
        <input
          name="password1"
          type="password"
          placeholder="Enter Your password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button>Submit again </button>
      </form> */}
    </div>
  );
}
