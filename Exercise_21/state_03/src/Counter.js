import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
      increment: this.props.incrementValue,
      interval: this.props.intervalTime,
    };

    setInterval(() => {
      this.setState({
        count: this.state.count + this.state.increment,
      });
    }, this.state.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
