import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";
//axios.defaults.baseURL = "https://backtravelappp.herokuapp.com";

export default function Register({ setShowRegister, setShowLogin }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const config = { header: { "Content-type": "application/json" } };
      await axios.post("/api/users/register", newUser, config);
      setError(false);
      setSuccess(true);
      setTimeout(function () {
        setShowRegister(false);
        setShowLogin(true)
      }, 1300);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logoReg">
        <Room className="logoIcon" />
        <span>TravelApp</span>
      </div>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <input autoFocus placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        <input type="file" name="image" accept="image/png, image/jpeg"></input>
        <button className="registerBtn" type="submit">
          Register
        </button>
        {success && (
          <span className="success">Successfull. You can login now! </span>
        )}
        {error && (
          <span className="failure">Please fill the require information!</span>
        )}
      </form>
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}
