import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {
  render() {
      return (
        <div className="welcome">
          <p>Welcome, <strong>{this.props.name}</strong>! 😃</p>
          <Age age={16}/>
        </div>
      );
  }
}

Welcome.defaultProps = {
  name: <strong>You</strong>,
};
