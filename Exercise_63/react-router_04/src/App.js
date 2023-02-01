import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div>
      <nav className="nav-container ">
        <Link to="/"> Homepage </Link>
        <Link to="/counter"> Your personal Counter </Link>
        <Link to="/users/:username"> Users Profile</Link>
      </nav>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Welcome name="Alessandro" />} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </div>
  );
}
