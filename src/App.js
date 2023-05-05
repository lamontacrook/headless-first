import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home/home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
