import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/home';

const App = () => {
  const context = {
    endpoint: '/graphql/execute.json',
    url: 'https://author-p121458-e1187969.adobeaemcloud.com/',
    project: 'pure-headless',
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path={'/'} element={<Home context={context}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
