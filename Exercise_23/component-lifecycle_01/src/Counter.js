import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
      //increment: this.props.incrementValue,
      //interval: this.props.intervalTime,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementValue,
      });
    }, this.props.intervalTime);
  }

  render() {
    return (
      <div>
        <CounterDisplay counting={this.state.count} />
      </div>
    );
  }
}


/* ENGLISH:
In this case, we don't need to initialize the interval value inside the constructor.
However, the initialization of a starting value for the counter is still required to be able to increment
the counter within the selected interval (and then update the state) */

/* ITALIANO:
In questo caso, non abbiamo bisogno di inizializzare l'intervallo all'interno del constructor.
Tuttavia, l'inizializzazione di un valore iniziale, all'interno di un constructor, o state, è ancora necessaria per 
poter incrementare il counter all'interno dell'intervallo di tempo indicato (e di conseguenza, aggiornare lo state). */