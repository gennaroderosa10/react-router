import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/products';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/prodotti' element={<Products />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
