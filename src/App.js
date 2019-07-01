import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Main />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
