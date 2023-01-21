import React from 'react';
import ReactDOM from 'react-dom/client';
import { ControlledForm } from './ControlledForm'; 

const form = <ControlledForm />
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(form);