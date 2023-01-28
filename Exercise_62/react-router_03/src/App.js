import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { FirstPage } from "./FirstPage";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/:username" element={<Welcome />} />
        <Route path="/counter/:username" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
