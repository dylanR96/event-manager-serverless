import React, { useState } from "react";
import "./Login.css";
import Frame from "../svgs/Frame.tsx";
import { Link } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

const Login = (props: Props) => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("success");
  };
  return (
    <>
      <div>
        <Frame />
        <h2>Where It's @</h2>
        <h2>STAFF</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="userN"
            onChange={handleChange}
            value={formData.username}
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            id="pass"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
          <button>Login in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
