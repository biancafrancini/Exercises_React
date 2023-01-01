import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
    increment: this.props.incrementValue,
    interval: this.props.intervalTime,
  };

  //In this case, the constructor is not required (but there's no harm in adding it).

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.state.increment,
      });
    }, this.state.interval);
  }

  render() {
    return (
      <div>
        <CounterDisplay counting={this.state.count} />
      </div>
    );
  }
}
