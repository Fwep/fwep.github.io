import "./App.css";
import { Root } from "./Root";
import { PhotoPanel } from "./PhotoPanel";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "photos",
        element: <PhotoPanel />,
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
