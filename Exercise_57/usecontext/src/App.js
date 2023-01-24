import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: "English 🇬🇧",
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
          <option>Italiano 🇮🇹</option>
          <option>English 🇬🇧</option>
          <option>Español 🇪🇸</option>
        </select>
        <br />
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
