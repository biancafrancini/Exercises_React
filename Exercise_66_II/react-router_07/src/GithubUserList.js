import { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

export function GithubUserList({ userList = [] }) {
  const [users, setUsers] = useState(userList);
  const [inputValue, setInputValue] = useState("");
  const { username } = useParams();

  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setUsers((_user) => _user.concat(inputValue));
  };

  return (
    <div className="add-users-container">
      <div className="current-users-list-space">
        <h3>Add users:</h3>
        <ul>
          {users.map((currentUser, index) => (
            <li key={`user${index}` + currentUser}>{currentUser}</li>
          ))}
        </ul>
      </div>
      <form className="form-container">
        <input
          name="username"
          value={inputValue}
          placeholder="username"
          onChange={handleInputChanges}
        />
        <button type="submit" onClick={handleSubmission}>
          Submit
        </button>
      </form>
      <br />
      <Link to={`newUser/${username}`}>Show user details ⤵️</Link>

      <Outlet />
    </div>
  );
}
