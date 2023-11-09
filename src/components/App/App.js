import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import Merch from '../Pages/Merch/Merch';
import About from '../Pages/About/About';
import Shows from '../Pages/Shows/Shows';
import Contact from '../Pages/Contact/Contact';
import NotFound from '../Pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Header />
        <Routes>
          <Route path='/' Component={ Home } />
          <Route path='/merch' Component={ Merch } />
          <Route path='/about' Component={ About } />
          <Route path='/shows' Component={ Shows } />
          <Route path='/contact' Component={ Contact } />
          <Route path='*' Component={ NotFound } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
