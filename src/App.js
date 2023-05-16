import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/home';
import { AppContext } from './utils/context';
import { Helmet } from 'react-helmet';

//<meta name="urn:auecon:aemconnection" content="aem:https://author-p101152-e938206.adobeaemcloud.com"></meta>
const App = () => {
  const context = useContext(AppContext);
  return (
    <div className='App'>
      <Helmet>
        <meta name='urn:auecon:aemconnection' content={`aem:${context.url}`} />
      </Helmet>
      <AppContext.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path={'/'} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default App;
