import React from "react";

export class ClickTracker extends React.Component {

  handlerClicks = (event) => {
    //console.log(event);
    const updatedH1 = document.querySelector("#h1Text");
    updatedH1.innerHTML = event.target.innerHTML;

  }

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
          <h1 id="h1Text"></h1>
        </div>
      </div>
    );
  }
}
