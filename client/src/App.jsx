
import React, { useState } from 'react';
import UserDetails from './pages/UsersDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UpdateuserDetails from './pages/UpdateuserDetails';
import UserInfo from './pages/UserInfo';

const appStyle = {
  backgroundColor: 'lightBlue',
  minHeight: '100vh',
};

function App() {
  const [data, setData] = useState([]);

  return (
    <Router>
      <AppContent data={data} setData={setData} />
    </Router>
  );
}

function AppContent({ data, setData }) {
  const { pathname } = useLocation();
  const isFilterVisible = pathname === '/';

  return (
    <div style={appStyle}>
      <Navbar />
      {isFilterVisible && <FilterSidebar setData={setData} />}
      <Routes>
        <Route path="/" element={<UserDetails data={data} setData={setData} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/updateuser/:id" element={<UpdateuserDetails />} />
        <Route path="/userdata/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
