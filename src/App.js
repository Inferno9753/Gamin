import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimonGame from "./components/SimonGame";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<SimonGame />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
