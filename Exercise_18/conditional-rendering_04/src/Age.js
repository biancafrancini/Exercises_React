import React from "react";


export class Age extends React.Component {
  render() {
    if (this.props.age > 18 && this.props.age < 65) {
      return <p> Your Age is: {this.props.age} 💪🏻</p>;
    }
  }
}