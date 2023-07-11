import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import PieChart from './pages/PieChart';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/piechart" element={<PieChart />} />
        <Route path="/addUser/:type" element={<AddEditUser />} />
        <Route path="/addUser/:type/:id" element={<AddEditUser />} />
        <Route path='/userInfo/:id' element={UserInfo} />
        <Route path='/about' element={About} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



