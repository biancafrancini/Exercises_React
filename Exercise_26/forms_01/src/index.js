import React from 'react';
import ReactDom from 'react-dom/client';
import { InteractiveWelcome } from './InteractiveWelcome';

const welcomeMessage = <InteractiveWelcome />;
const $root = ReactDom.createRoot(document.querySelector("#root"));
$root.render(welcomeMessage);



