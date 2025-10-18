import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTree from './pages/Create';
import Profile from './pages/Profile'; 
import Register from './pages/Register';
import Wrapper from './pages/Wrapper';

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
        <Route path="register" element={<Register/>} />
        <Route path="dashboard" element={<Wrapper><Dashboard/></Wrapper>} />
        <Route path="create" element={<Wrapper><CreateTree/></Wrapper>} />
        <Route path="profile" element={<Wrapper><Profile/></Wrapper>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
