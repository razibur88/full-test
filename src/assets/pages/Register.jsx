import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [fullname, setFullname] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };
  let handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  let handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("done", userCredential);
      })
      .then(() => {
        setFullname("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="">
        <input
          type="text"
          value={fullname}
          onChange={handleFullnameChange}
          placeholder="Name"
        />
      </div>
      <div className="">
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className="">
        <input
          type="text"
          onChange={handlePasswordChange}
          placeholder="password"
          value={password}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Register;
