import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Sara</strong>} age={20}/>
      </div>
    );
  }
}
