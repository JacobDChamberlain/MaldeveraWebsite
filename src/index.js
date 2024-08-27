import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import ReactModal from 'react-modal';
import TestModal from './components/Pages/TestModal';

ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <TestModal /> */}
  </React.StrictMode>
);
