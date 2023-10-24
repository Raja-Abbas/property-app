import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from "./components/Home/Hero";
import BuyerPage from "./components/Buyer/main";
import SellerPage from "./components/Seller/Main";
import InvestorPage from "./components/Investor/main";
import PropertyManagementPage from "./components/PropertyManagement/Main";
import About from "./components/About/Main"
function App() {
  const currentPath = window.location.pathname;

  
  const renderHero = currentPath === '/';

  return (
    <Router>
      <div className="App">
        {renderHero && <Hero title="Find Your Dream Home" buttonText="Get Started" />}
        <Routes>
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/investor" element={<InvestorPage />} />
          <Route path="/propertymanagement" element={<PropertyManagementPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
