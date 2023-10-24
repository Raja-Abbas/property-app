import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from "./components/Home/Hero";
import BuyerPage from "./components/Buyer/main";
import SellerPage from "./components/Seller/Main";
import InvestorPage from "./components/Investor/main";
import PropertyManagementPage from "./components/PropertyManagement/Main";
<<<<<<< HEAD
import About from "./components/About/Main"
=======
import Contact from "./components/Contact/main"

>>>>>>> 865aef1f29f43bb60227e33e72f29cc3108a8b23
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
<<<<<<< HEAD
          <Route path="/about" element={<About />} />
=======
          <Route path="/contact" element={<Contact />} />
>>>>>>> 865aef1f29f43bb60227e33e72f29cc3108a8b23
        </Routes>
      </div>
    </Router>
  );
}

export default App;
