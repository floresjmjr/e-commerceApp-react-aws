import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import MyProvider from './ContextAPI/Provider';


function App() {
  return (
    <BrowserRouter className="App">
      <MyProvider>
        <Header />
        <Main />
        <Footer/>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
