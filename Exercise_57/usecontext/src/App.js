import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: "English ð¬ð§",
  };

  handlerChangeLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handlerChangeLanguage}>
          <option>Italiano ð®ð¹</option>
          <option>English ð¬ð§</option>
          <option>EspaÃ±ol ðªð¸</option>
        </select>
        <br />
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
