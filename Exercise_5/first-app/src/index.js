import React from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component{
    render(){
      return <h1>Hello World! 👋🏻</h1>
    }
  };

const $root = ReactDOM.createRoot(document.querySelector("#root"));
$root.render(<Hello />);