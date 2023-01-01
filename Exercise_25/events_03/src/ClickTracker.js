import React from "react";
//import { Ciao } from './Ciao';

export class ClickTracker extends React.Component {
  state = {
    hasBeenClicked: false,
  };

  handlerClicks = (event) => {
    let id = event.target.id;
    let newH1 = document.createElement("h1");
    const divButtonsContainer = document.querySelector(".container");

    //console.log(event);

    if (id === "1") {
      newH1.innerText = event.target.innerHTML;
      divButtonsContainer.appendChild(newH1);
    } else if (id === "2") {
      newH1.innerText = event.target.innerHTML;
      divButtonsContainer.appendChild(newH1);
    } else if (id === "3") {
      newH1.innerText = event.target.innerHTML;
      divButtonsContainer.appendChild(newH1);
    }
  };

  render() {
    return (
      <div className="container">
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
