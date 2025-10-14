import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTree from './pages/Create';
import Profile from './pages/Profile'; 
import Layout from './components/layout/Layout';
import './styles/index.css';
import './styles/layout.css';
import './styles/components.css';



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
