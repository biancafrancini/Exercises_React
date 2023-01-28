import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Guys" />} />
        <Route path="counter" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
