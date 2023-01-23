import React, { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GithubList({ userList = [] }) {
  const [users, setUsers] = useState(userList);
  const [inputValue, setInputValue] = useState("");

  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setUsers((_user) => _user.concat(inputValue));
  };

  return (
    <div className="container">
        <div className="Current-users-list">
        <h3>Current users:</h3>
        <ul>{users.map(currentUser => <li key={"user" + currentUser}>{currentUser}</li>)}</ul>
        </div>
      <form className="form-container">
        <input
          name="username"
          value={inputValue}
          placeholder="Please, insert your username..."
          onChange={handleInputChanges}
        />
        <button type="submit" onClick={handleSubmission}>
          Submit
        </button>
      </form>
      <hr />
      <ul>{users.map(profileUser => <li key={"userProfile" + profileUser}><GitHubUser username={profileUser} /><br /></li>)}</ul>
    </div>
  );
}
