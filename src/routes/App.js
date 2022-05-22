import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from '../pages/Details';
import Login from '../pages/Login';
import MyActions from '../pages/MyActions';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/MyActions" element={<MyActions />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
    </Router>
  )
}

export default App
