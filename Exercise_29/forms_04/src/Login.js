import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      remember: false,
      buttonDisabled: true,
    };

    this._state = {
      username: "",
      password: "",
      remember: false,
      buttonDisabled: true,
    };

    this.onLogin = () => {
      console.log(this.state);
    };
  }

  handlerInputChanged = (e) => {
    const { name, value, checkedValue } = e.target;

    //console.log(e);
    this.setState({
      [name]: value,
      [checkedValue]: true,
      buttonDisabled: this.state.username && this.state.password ? false : true,
    });
  };

  resetButton = (e) => {
    this.setState({
      ...this._state,
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
        <button
          name="button"
          type="submit"
          onClick={this.onLogin}
          disabled={this.state.buttonDisabled}
        >
          Login
        </button>
        <br />
        <br />
        <button name="button" type="reset" onClick={this.resetButton}>
          Reset
        </button>
      </div>
    );
  }
}
