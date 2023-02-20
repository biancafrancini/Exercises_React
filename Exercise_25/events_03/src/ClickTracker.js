import React from "react";

export class ClickTracker extends React.Component {
  state = {
    h1Text: "",
  };

  handlerClicks = (event) => {
    //console.log(event);

    this.setState({
      h1Text: event.target.innerHTML,
    });
  };

  render() {
    return (
      <div>
        <button id={1} onClick={this.handlerClicks}>
          Ciao 🇮🇹
        </button>
        <button id={2} onClick={this.handlerClicks}>
          Hello 🇳🇿
        </button>
        <button id={3} onClick={this.handlerClicks}>
          Hola 🇪🇸
        </button>
        <div>
          <h1>{this.state.h1Text}</h1>
        </div>
      </div>
    );
  }
}
