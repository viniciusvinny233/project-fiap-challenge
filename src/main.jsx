import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./routes/About.jsx";
import Home from "./routes/Home";
import Publish from "./routes/Publish";
import Profile from "./routes/Profile";
import Saves from "./routes/Saves";
import Challenges from "./routes/Challenges";
import Maps from "./routes/Maps";
import Pitch from "./routes/Pitch";
import Ranking from "./routes/Ranking";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "about",
      element: <About />,
   },
   {
      path: "publish",
      element: <Publish />,
   },
   {
      path: "profile",
      element: <Profile />,
   },
   {
      path: "saves",
      element: <Saves />,
   },
   {
      path: "challenges",
      element: <Challenges />,
   },
   {
      path: "maps",
      element: <Maps />,
   },
   {
      path: "pitch",
      element: <Pitch />,
   },
   {
      path: "ranking",
      element: <Ranking />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
