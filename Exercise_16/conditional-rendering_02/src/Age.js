import React from "react";

export class Age extends React.Component {
  render() {
    if (this.props.age) {
      return <p> Your Age is: {this.props.age}</p>;
    }
  }
}
