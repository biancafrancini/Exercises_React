import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInputChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checkedValue = e.target.checked;

    this.setState({
      [name]: value,
      [checkedValue]: true,
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="input"
          value={this.state.username}
          onChange={this.handlerInputChanged}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handlerInputChanged}
        />
        <input
          name="remember"
          type="checkbox"
          value={this.state.remember}
          onChange={this.handlerInputChanged}
        />
      </div>
    );
  }
}
