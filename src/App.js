import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import './App.css';
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/register/Register";
// import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
