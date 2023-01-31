import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
      </Routes>
    </div>
  );
}
