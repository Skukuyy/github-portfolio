import { useState } from "react";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import Root from "./routes/Root.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./css/app.css"

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <AboutMe />,
    children: [
      { path: "/", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <div className="main-app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
