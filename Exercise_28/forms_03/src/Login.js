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

    this.onLogin = () => {
      console.log(this.state);
    };
  }

  handlerInputChanged = (e) => {
    const { name, value} = e.target;

    //console.log(e);
    this.setState({
      [name]: e.target.type === "checkbox" ? e.target.checked : value,
      buttonDisabled: this.state.username && this.state.password ? false : true,
    });

    console.log(this.state);
  };

  render() {
    return (
      <div>
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
            onChange={this.handlerInputChanged}/>
          <button
            name="button"
            onClick={this.onLogin}
            disabled={this.state.buttonDisabled}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
