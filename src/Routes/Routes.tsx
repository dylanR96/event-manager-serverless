import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Events from "../pages/Events.tsx";
import Ticket from "../pages/Ticket.tsx";
import Verify from "../pages/Verify.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => (document.title = "React events page || Events page"),
    children: [
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
