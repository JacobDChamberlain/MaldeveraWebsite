import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Merch from '../Merch/Merch';
import About from '../About/About';
import Shows from '../Shows/Shows';
import Contact from '../Contact/Contact';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
