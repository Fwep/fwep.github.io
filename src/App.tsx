import { Root } from "./Root";
import { PhotoPanel } from "./PhotoPanel";
import { WorkPanel } from "./WorkPanel";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
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
        element: <WorkPanel />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
