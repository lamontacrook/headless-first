import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/home';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  const context = {
    endpoint: '/graphql/execute.json',
    url: 'https://author-p121458-e1187969.adobeaemcloud.com',
    project: 'pure-headless',
  };

  return (
    <div className='App'>
      <HelmetProvider>
        <Helmet>
          <meta name='urn:adobe:aue:system:aemconnection' content={`aem:${context.url}`} />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path={'/'} element={<Home context={context}/>} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
