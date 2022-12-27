import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hello } from './Hello';


const helloWorld = <Hello />;

const $root = ReactDOM.createRoot(document.querySelector("#root"));
$root.render(helloWorld);