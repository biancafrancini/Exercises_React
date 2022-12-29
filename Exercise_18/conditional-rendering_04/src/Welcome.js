import React from "react";
import { Age } from "./Age";

const ageDetails = {
  _age: 20,
};

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>! 😃
        </p>
        {this.props.name === "John" &&
          ageDetails._age > 18 &&
          ageDetails._age < 65 && <Age age={ageDetails._age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: <strong>You</strong>,
};
