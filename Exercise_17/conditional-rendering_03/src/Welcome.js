import React from "react";
import { Age } from "./Age";

const ageDetails = {
  _age: 25,
}

export class Welcome extends React.Component {
  render() {
      return (
        <div>
          <p>Welcome, {this.props.name}! 😃</p>
          {ageDetails._age > 18 && ageDetails._age < 65 && <Age age={ageDetails._age} />}
        </div>
      );
  }
}

Welcome.defaultProps = {
  name: <strong>You</strong>,
};
