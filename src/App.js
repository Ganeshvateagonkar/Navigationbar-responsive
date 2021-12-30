import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
