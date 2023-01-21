import React, { useState } from "react";

function useControlledForm(userDetails) {
  const [userData, setUserData] = useState(userDetails);

  function handleSubmittedData(e) {
    const { name, value } = e.target;

    setUserData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });

    console.log(userData);
  }

  return {
    username: userData.username,
    password: userData.password,
    submittedData: handleSubmittedData,
  };
}

export function ControlledForm({ inputValues= { name: "", password: "" } }) {
  const { username, password, submittedData } = useControlledForm(inputValues);

  return (
    <div>
      <form>
        <input
          name="name"
          value={username}
          type="text"
          placeholder="Your username.."
          onChange={submittedData}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Your password.."
          onChange={submittedData}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
