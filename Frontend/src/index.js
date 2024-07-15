import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CreditScore from "./pages/CreditScore";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/home',
    element: <Main />,
  },
  {
    path: '/creditscore',
    element: <CreditScore />,
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/About',
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


//  No. of dependents
//  Education
//  Self employed
//  Income anum
//  Loan amount - kitna chahiye
//  Loan Term - no. of days
//  CIBIL Score

//  Loan status - eligible or not  - to be predicted