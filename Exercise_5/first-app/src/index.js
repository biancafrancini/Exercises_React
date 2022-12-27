import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './Hello';

const $root = document.querySelector("#root");

const helloWorld = <Hello />;

ReactDOM.render(helloWorld, $root);