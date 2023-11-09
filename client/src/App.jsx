import React from 'react'
import UserDetails from './pages/UsersDetails'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import FilterSidebar from './components/FilterSidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const appStyle = {
  backgroundColor: 'lightBlue', // Light gray background color
  minHeight: '100vh', // Ensure the background covers the full viewport height
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <FilterSidebar />
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
