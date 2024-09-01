import Noane from "./Noane";
import MyCrossWord from "./Crossword";
import Cake from "./Cake";
import Counter from "./Counter";
import Diff from "./Diff";
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fireworks from "@fireworks-js/react";
import "./styles/app.css";
import Url from "./Url";
import Level4 from "./Level4";
import { ToastContainer } from "react-toastify";
import Card from "./Card";

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
        path: "/cake",
        element: <Cake />,
    },
    {
        path: "/diff",
        element: <Diff />,
    },
    {
        path: "/level3",
        element: <Url />,
    },
    {
        path: "/level4",
        element: <Level4 />,
    },
    {
        path: "/counter",
        element: <Counter />,
    },
    {
        path: "/card",
        element: <Card />,
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
);
