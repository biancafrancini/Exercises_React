import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
        <Route path="counter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}
