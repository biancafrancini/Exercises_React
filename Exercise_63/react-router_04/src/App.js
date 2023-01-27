import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  const linkContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "600px",
    marginBottom: "50px",
  };
  return (
    <div>
      <div style={linkContainer}>
        <Link to="/"> Homepage </Link>
        <Link to="counter"> Your personal Counter </Link>
        <Link to="users/:username"> Users Profile</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="Guys" />} />
          <Route path="counter" element={<ClickCounter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </div>
  );
}
