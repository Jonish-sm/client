import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import ThankYou from "./components/ThankYou";
import Render from "./components/Render";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Render />,
  },
  {
    path: "/thank",
    element: <ThankYou />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
