import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const naviagte = useNavigate("");
  const [type, setType] = useState("");
  const [data, setData] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      let url = "";
      {
        type === "Admin"
          ? (url = "https://ideamagix-backend-1gwu.onrender.com/admin/Signup")
          : (url = "https://ideamagix-backend-1gwu.onrender.com/instructor/Signup");
      }
      const { data: res } = await axios.post(url, data);
      naviagte("/");
      // console.log(res.message);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="signUp">
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
        value={data.full_name}
        onChange={handleChnage}
      />
      <label htmlFor="email" className="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="enter your email here..."
        name="email"
        value={data.email}
        onChange={handleChnage}
      />

      <label htmlFor="password" className="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="enter your password here..."
        name="password"
        value={data.password}
        onChange={handleChnage}
      />
      {error && <div className="error">{error}</div>}

      <button className="btn" onClick={register}>
        SIGN UP
      </button>
    </div>
  );
};
export default SignUp;
