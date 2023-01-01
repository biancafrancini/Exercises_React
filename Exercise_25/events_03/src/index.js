import React from "react";
import ReactDOM from "react-dom/client";
import { ClickTracker } from "./ClickTracker";


const clickingTrack = <ClickTracker />

const $root = ReactDOM.createRoot(document.querySelector("#root"));
$root.render(clickingTrack);
