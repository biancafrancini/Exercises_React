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
    const name = e.target.name;
    const value = e.target.value;
    const checkedValue = e.target.checked;

    console.log(e);
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
      <form>
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
        <button name="button" type="submit" onClick={this.onLogin} disabled={this.state.buttonDisabled}>
        Login
        </button>
        <br />
        <br />
        <button name="button" type="reset" onClick={this.resetButton}>
          Reset
        </button>
      </form>
    );
  }
}
