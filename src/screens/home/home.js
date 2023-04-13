import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../utils/context';


import './home.css';

const Home = () => {
  const context = useContext(AppContext);

  useEffect(() => {

  }, []);

  return (
    <div className='main-body'>
      <div>Welcome to developers bootcamp!</div>
    </div>
  );
};

export default Home;
