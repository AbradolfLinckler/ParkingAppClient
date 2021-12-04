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
import TopBar from "./components/topbar/Topbar";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
// import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <TopBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
