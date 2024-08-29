import Noane from "./Noane";
import MyCrossWord from "./Crossword";
import Diff from "./Diff";
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fireworks from "@fireworks-js/react";
import "./styles/app.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Noane />,
    },
    {
        path: "/fireworks",
        element: <Fireworks style={{ height: "99vh" }} />,
    },
    {
        path: "/crossword",
        element: <MyCrossWord />,
    },
    { path: "/diff", element: <Diff /> },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
);
