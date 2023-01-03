import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    inputName: "",
  };

  handlerInputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          name="inputName"
          value={this.state.inputName}
          onChange={this.handlerInputOnChange}
        />
        <Welcome name={this.state.inputName} />
      </div>
    );
  }
}
