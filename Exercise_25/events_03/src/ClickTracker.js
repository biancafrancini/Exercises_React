import React from "react";

const $h1SayHello = document.querySelector("#h1");

export class ClickTracker extends React.Component {
  handlerClicks = (event) => {
    let id = event.target.id;
    //console.log(event);

    switch (id) {
      case "1":
        $h1SayHello.innerText = event.target.innerHTML;
        break;

      case "2":
        $h1SayHello.innerText = event.target.innerHTML;
        break;

      case "3":
        $h1SayHello.innerText = event.target.innerHTML;
        break;

      default:
        $h1SayHello.innerText = "Select a valid language";
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
      </div>
    );
  }
}
