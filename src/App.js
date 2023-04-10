import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/home';
import { AppContext } from './utils/Context';

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
