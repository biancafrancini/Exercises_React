import React from "react";
import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handlerInputChanged(e) {
    const { name, type, value, checked } = e.target;

    setData({
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      <form>
        <input
          name="username"
          type="input"
          value={data.username}
          onChange={handlerInputChanged}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handlerInputChanged}
        />
        <input
          name="remember"
          type="checkbox"
          value={data.remember}
          onChange={handlerInputChanged}
        />
        <button name="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
