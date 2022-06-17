import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";

import SideBar from "./components/SideBar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);