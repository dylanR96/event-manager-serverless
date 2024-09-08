import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
