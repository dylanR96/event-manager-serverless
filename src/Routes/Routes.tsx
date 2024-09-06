import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Login from "../pages/Login.tsx";
import Events from "../pages/Events.tsx";
import Ticket from "../pages/Ticket.tsx";
import Verify from "../pages/Verify.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
        loader: () => (document.title = "React login page || Login page"),
      },
      {
        path: "/events",
        element: <Events />,
        loader: () => (document.title = "React events page || Events page"),
      },
      {
        path: "/ticket",
        element: <Ticket />,
        loader: () => (document.title = "React ticket page || Ticket page"),
      },
      {
        path: "/verify",
        element: <Verify />,
        loader: () => (document.title = "React verify page || Verify page"),
      },
    ],
  },
]);
