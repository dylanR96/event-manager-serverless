import React, { useState } from "react";
import "./Login.css";
import Frame from "../svgs/Frame.tsx";
import { Outlet, useNavigate } from "react-router";

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://8vzihxkfu5.execute-api.eu-north-1.amazonaws.com/event/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data: Response = await response.json();

      if (response.ok) {
        console.log(data);
        navigate("/app/events");
      } else {
        console.log("Response threw an error");
      }
    } catch (error) {
      console.error("Error finding user", error);
    }
  };
  return (
    <>
      <div className="main">
        <Outlet />
        <div className="main__logo">
          <Frame />
          <h2>Where It's @</h2>
          <h2>STAFF</h2>
        </div>
        <div>
          <form className="main__form" onSubmit={handleSubmit}>
            <input
              className="main__form-inputs"
              type="text"
              name="username"
              id="userN"
              onChange={handleChange}
              value={formData.username}
              placeholder="Username"
            />
            <input
              className="main__form-inputs"
              type="text"
              name="password"
              id="pass"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
            />
            <button className="main__form-btn">Login in</button>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
