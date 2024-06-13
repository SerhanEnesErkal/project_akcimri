import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Phone from "./views/Phone.jsx";
import Tablet from "./views/Tablet.jsx";
import Laptop from "./views/Laptop.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/phone",
    element: <Phone />,
  },
  {
    path: "/tablet",
    element: <Tablet />,
  },
  {
    path: "/laptop",
    element: <Laptop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div>
      <div className="header">
        <div className="left-header">
          <h1>AKCİMRİ</h1>
          <i class="fa-solid fa-turkish-lira-sign md-36"></i>
        </div>
      </div>
    </div>
    <RouterProvider router={router} />
  </>
);
