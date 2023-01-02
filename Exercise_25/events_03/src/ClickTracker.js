import React from "react";

export class ClickTracker extends React.Component {
  state = {
    h1Text: "",
  };

  handlerClicks = (event) => {
    let id = event.target.id;
    //console.log(event);

    switch (id) {
      case "1":
        this.setState({
          h1Text: <h1>{event.target.innerHTML}</h1>,
        });
        break;

      case "2":
        this.setState({
          h1Text: <h1>{event.target.innerHTML}</h1>,
        });
        break;

      case "3":
        this.setState({
          h1Text: <h1>{event.target.innerHTML}</h1>,
        });
        break;

      default:
        this.setState({
          h1Text: "Select a valid language",
        });
    }
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
