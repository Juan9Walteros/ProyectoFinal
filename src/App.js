import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//import Components

import Home from  './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Destination from './components/Destination'
import Tour from './components/Tour';
import layouts from './layouts/navbar'
import NavbarTravel from './layouts/navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarTravel />}>
          <Route index element={ <Home />}/>
          <Route path='/About' element={ <About />}/>
          <Route path='/Destination' element={ <Destination />}/>
          <Route path='/Tour' element={ <Tour />}/>
          <Route path='/Blog' element={ <Blog />}/>
          <Route  path="/*" element={<Navigate to={"/"} />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;