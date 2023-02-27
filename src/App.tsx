import "./App.css";
import { Root } from "./Root";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
