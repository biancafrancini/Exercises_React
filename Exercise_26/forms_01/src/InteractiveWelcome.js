import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handlerInputOnChange = (e) => {
    const value = e.target.value;

    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <form>
        <input
          name="inputName"
          value={this.state.name}
          onChange={this.handlerInputOnChange}
        />
        <Welcome name={this.state.name} />
      </form>
    );
  }
}
