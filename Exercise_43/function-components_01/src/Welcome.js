import React from "react";

export function Welcome({ name }) {
  return (
    <div className="welcome">
      <p>Welcome, <strong>{name}</strong>! 😃</p>
    </div>
  );
}

/* Previous solution using class component instead:
export class Welcome extends React.Component {
  render() {
      return (
        <div className="welcome">
          <p>Welcome, <strong>{this.props.name}</strong>! 😃</p>
        </div>
      );
  }
}
*/
