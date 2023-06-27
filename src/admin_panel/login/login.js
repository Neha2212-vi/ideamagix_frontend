import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [error, setError] = useState("");
  const [type, setType] = useState("");
  const [login, setLogIn] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setLogIn({
      ...login,
      [name]: value,
    });
  };
  const Admin_login = async (e) => {
    e.preventDefault();
    try {
      let url = "";
      {
        type === "Admin"
          ? (url = "https://ideamagix-backend-1gwu.onrender.com/admin/Login")
          : (url = "https://ideamagix-backend-1gwu.onrender.com/instructor/Login");
      }
      const { login: res } = await axios.post(url, login);
      localStorage.setItem("token", login.data);
      {
        type === "Admin"
          ? (window.location = "/admin_dashboard")
          : (window.location = "/instructor_dashboard");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.request.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-heading">LOGIN</div>
      <div>
        <div id="typeOfUser">Register As</div>
        <input
          type="radio"
          id="type"
          name="type"
          value="Instructor"
          onChange={(e) => setType(e.target.value)}
        />
        Instructor
        <input
          type="radio"
          id="type"
          name="type"
          value="Admin"
          onChange={(e) => setType(e.target.value)}
        />
        Admin
      </div>
      <label htmlFor="email_login" className="email_login">
        Full Name
      </label>
      <input
        type="text"
        placeholder="enter your full_name here..."
        id="email_login"
        name="full_name"
        value={login.full_name}
        onChange={handleChnage}
      />
      <label htmlFor="email_login" className="email_login">
        Email
      </label>
      <input
        type="email"
        placeholder="enter your email here..."
        id="email_login"
        name="email"
        value={login.email}
        onChange={handleChnage}
      />

      <label htmlFor="pass_login" className="pass_login">
        Password
      </label>
      <input
        type="password"
        placeholder="enter your password here..."
        id="pass_login"
        name="password"
        value={login.password}
        onChange={handleChnage}
      />
      {error && <div className="error">{error}</div>}
      <button type="Submit" className="btn" onClick={Admin_login}>
        LOGIN
      </button>
      <div className="alt">
        Need an account?<span> </span>
        <Link to="/signup">SIGN UP</Link>
      </div>
    </div>
  );
};
export default LogIn;
