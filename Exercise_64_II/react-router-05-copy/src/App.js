import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { FirstPage } from "./FirstPage";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/:username" element={<Welcome />} />
          <Route path="/counter/:username" element={<ClickCounter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="*" element={<div><h3>Page not found. Sorry! 😞</h3>
              <Link to="/"> Go back to Homepage </Link></div>}
          />
        </Routes>
      </div>
    </div>
  );
}
