import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("ok", userCredential);
      })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="">
        <input type="email" onChange={handleEmail} placeholder="email" />
      </div>
      <div className="">
        <input
          type="password"
          onChange={handlePassword}
          placeholder="password"
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
