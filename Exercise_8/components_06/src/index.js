import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const $root = document.querySelector("#root");

const helloWorld = <App />;

ReactDOM.render(helloWorld, $root);