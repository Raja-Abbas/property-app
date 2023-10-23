import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from "./components/Home/Hero";
import Header from "./components/Home/Header";
import BuyerPage from "./components/Buyer/main";
import SellerPage from "./components/Seller/Main";
import InvestorPage from "./components/Investor/main";
import PropertyManagementPage from "./components/PropertyManagement/Main";

function App() {
  const currentPath = window.location.pathname;

  // Conditionally render the Hero component only on the home page
  const renderHero = currentPath === '/';

  return (
    <Router>
      <div className="App">
        {renderHero && <Hero title="Find Your Dream Home" buttonText="Get Started" />} {/* Display Hero on the home page */}
        <Header />
        <Routes>
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/investor" element={<InvestorPage />} />
          <Route path="/propertymanagement" element={<PropertyManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
