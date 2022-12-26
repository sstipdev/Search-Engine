import ChoiceType from "./components/ChoiceType";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="test" element={<ChoiceType />} />
      </Routes>
    </div>
  );
}

export default App;
