import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home/home';
import { AppContext } from './utils/context';

const App = () => {
  const context = useContext(AppContext);
  return (
    <div className='App'>
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
