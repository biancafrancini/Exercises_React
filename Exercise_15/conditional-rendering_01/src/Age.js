import React from "react";

export class Age extends React.Component {
  render() {
      return <p> Your Age is: {this.props.age} 💪🏻</p>;
  }
}

Age.defaultProps = {
  age: "🤷🏻‍♀️",
};
