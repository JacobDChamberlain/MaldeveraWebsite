import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';
import Home from '../Pages/Home/Home';
import Merch from '../Pages/Merch/Merch';
import About from '../Pages/About/About';
import Shows from '../Pages/Shows/Shows';
import Tours from '../Pages/Tours/Tours';
import Contact from '../Pages/Contact/Contact';
import Purchase from '../Pages/Purchase/Purchase';
import NotFound from '../Pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <SocialMediaBar />
          <Routes>
            <Route path='/' Component={ Home } />
            <Route path='/merch' Component={ Merch } />
            <Route path='/about' Component={ About } />
            <Route path='/shows' Component={ Shows } />
            <Route path='/tours' Component={ Tours } />
            <Route path='/contact' Component={ Contact } />
            <Route path='/giveusyourmoney' Component={ Purchase } />
            <Route path='*' Component={ NotFound } />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
