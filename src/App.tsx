import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateTree from './components/contribute-tree/Create';
import Profile from './components/profile/Profile'; 
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="create" element={<CreateTree/>} />
        <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
