import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

import "./App.css";

export function App() {
  return (
    <div>
      <nav className="nav-container ">
        <Link to="/"> Homepage </Link>
        <Link to="/counter"> Your personal Counter </Link>
        <Link to="/users"> Add Users </Link>
      </nav>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Welcome name="Alessandro" />} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
            <Route index element={<p>Add a user and select it 🙂</p>} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h3>Page not found. Sorry! 😞</h3>
                <Link to="/"> Go back to Homepage </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
