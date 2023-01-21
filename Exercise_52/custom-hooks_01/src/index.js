import React from 'react';
import ReactDOM from 'react-dom/client';
import {CounterComponent} from './CounterComponent';

const counterComponent = <CounterComponent />
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(counterComponent);
