import ChoiceType from "./components/ChoiceType";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import NotPage from "./routes/NotPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="test" element={<ChoiceType />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
}

export default App;
