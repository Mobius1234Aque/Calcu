import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import StudentPopulationCalculator from "./views/Calculadora/StudentPopulationCalculator";
import Calcu from "./views/Calculadora/CalculPredic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPopulationCalculator />,
  },
  {
    path: "/CalculadoraParteDos",
    element: <Calcu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
