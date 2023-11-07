import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      Welcome to Maldevera
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' Component={ Home } />
          <Route path='/merch' Component={ Merch } />
          <Route path='/about' Component={ About } />
          <Route path='/shows' Component={ Shows } />
          <Route path='/contact' Component={ Contact } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
