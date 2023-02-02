import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function GithubUserList({ userList = [] }) {
  const [users, setUsers] = useState(userList);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setUsers((_user) => _user.concat(inputValue));
    if (inputValue) {
      navigate(`${inputValue}`);
    }
  };

  return (
    <div className="add-users-container">
      <div className="current-users-list-space">
        <h3>Add Users to your list 🙌🏻</h3>
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
          placeholder="Please, insert username..."
          onChange={handleInputChanges}
        />
        <button type="submit" onClick={handleSubmission}>
          Add
        </button>
      </form>
      <br />

      <Outlet />

      <Link to="/"> Go back to Homepage</Link>
    </div>
  );
}
