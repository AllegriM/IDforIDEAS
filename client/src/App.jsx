import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />{" "}
        <Route exact path="/enter" element={<Login />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
