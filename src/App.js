import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/home';

const App = () => {
  const context = {
    endpoint: '/graphql/execute.json',
    url: 'https://author-p109352-e1066407.adobeaemcloud.com/',
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
