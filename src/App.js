import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import Header from '../src/components/Header';
import Cart from '../src/components/cart';
import Footer from '../src/components/Footer';
import Naturaldiamond from '../src/pages/Diamonds/Naturaldiamond';
import Labgrowndiamond from './pages/Diamonds/Labgrowndiamond';
import Location from '../src/pages/Locations/location';
import Productpage from '../src/pages/Diamonds/productpage';
import Diamondedu from '../src/pages/Diamonds/diamondedu';
import Engagement from '../src/pages/Engagement/engagement'
import Labgrowndiamondedu from './pages/Diamonds/Labgrowndiamondedu';
import FAQ from '../src/pages/FAQ';
import cart from '../src/components/cart';
import { Provider } from 'react-redux';
import app from './firebase';
import Signin from "./pages/signin";

import './App.css';

const App = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleAccountIconClick = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
  
      <Router>
        <Header onAccountIconClick={handleAccountIconClick}/>
        {isSliderOpen && <Signin onAccountIconClick={handleAccountIconClick} />}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/naturaldiamond"element={<Naturaldiamond/>} />
          <Route path="/nd/:shape"element={<Naturaldiamond/>} />
          <Route path="/labgrowndiamond"element={<Labgrowndiamond/>}/>
          <Route path="/lg/:shape"element={<Labgrowndiamond/>}/>
          <Route path="/location"element={<Location/>} />
          <Route path =":pagename/:id"element={<Productpage/>} />
          <Route path="/diamondedu"element={<Diamondedu/>} />
          <Route path="/:pagename/"element={<Engagement/>} />
          <Route path="/labgrowndiamondedu"element={<Labgrowndiamondedu/>} />
          <Route path="/faq"element={<FAQ/>} />
          <Route path ="/cart"element={<Cart/>} />
        </Routes>
        <Footer/> 
    
      </Router>
  );
}

export default App;
