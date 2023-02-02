import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { FirstPage } from "./FirstPage";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";
import { GitHubUser } from "./GitHubUser";

import "./App.css";

export function App() {
  return (
    <div>
      {/*<div className="nav-container">
        <nav>
          <Link to="/"> Homepage </Link>
          <Link to="/counter"> Your personal Counter </Link>
          <Link to="/users"> Users Profile</Link>
        </nav>
  </div>*/}
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/:username" element={<Welcome />} />
          <Route path="/counter/:username" element={<ClickCounter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it 🙂</p>} />
            <Route path="newUser/:username" element={<ShowGithubUser />} />
            <Route path="newUser" element={<GitHubUser />}/>
          </Route>
          <Route path="*" element={<div><h3>Page not found. Sorry! 😞</h3>
              <Link to="/"> Go back to Homepage </Link></div>}
          />
        </Routes>
      </div>
    </div>
  );
}
