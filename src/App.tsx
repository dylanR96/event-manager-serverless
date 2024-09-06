import React from "react";
import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface Props {}

const App = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div>
          <button onClick={() => navigate("/ticket")}>Ticket</button>
          <button onClick={() => navigate("/verify")}>Verify</button>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
