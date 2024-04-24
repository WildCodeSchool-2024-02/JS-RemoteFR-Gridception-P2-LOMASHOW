import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Creators from "./pages/Creators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creators",
    element: <Creators />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
