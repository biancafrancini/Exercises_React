import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
