import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/:username" element={<Welcome />} />
        <Route path="/counter/:username" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
