import "./App.css";
import { Root } from "./Root";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "photos",
        element: <div>Photos</div>,
      },
      {
        path: "work",
        element: <div>Work</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
