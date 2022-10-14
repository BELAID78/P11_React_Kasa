import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>
);