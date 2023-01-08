import React from "react";

export class UncontrolledLogin extends React.Component {

  handleForm = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;
    const button = username && password ? e.target[3].disabled : !e.target[3].disabled;

    //console.log(e);
    console.log({ username, password, remember, button});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input name="username" type="input"/>
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />
          <button type="submit">
            Login
          </button>
          <br />
          <br />
          <button type="reset"> Reset </button>
        </form>
      </div>
    );
  }
}
