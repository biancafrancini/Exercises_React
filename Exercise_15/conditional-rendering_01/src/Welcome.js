import React from "react";
import { Age } from "./Age";

const ageProps = {
  _age: 19,
}

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, {this.props.name}! 😃</p>
        {ageProps._age > 18 && <Age age={ageProps._age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: <strong>You</strong>,
};
