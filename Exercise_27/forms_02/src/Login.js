import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInputChanged = (e) => {
    //console.log(e);
    const { name, value} = e.target;

    this.setState({
      [name]: e.target.type === "checkbox" ? true : value,
    });
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
            onChange={this.handlerInputChanged}
          />
        </form>
      </div>
    );
  }
}
