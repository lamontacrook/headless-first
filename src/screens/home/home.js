import React, { useContext, useEffect, useState } from 'react';
import AEMHeadless from '@adobe/aem-headless-client-js';
import { useErrorHandler } from 'react-error-boundary';
import { AppContext } from '../../utils/Context';
import Teaser from '../../components/teaser/teaser';

import './home.css';

const Home = () => {
  const [content, setContent] = useState({});
  const handleError = useErrorHandler();
  const context = useContext(AppContext);

  useEffect(() => {
    const sdk = new AEMHeadless({
      serviceURL: context.url,
      endpoint: context.endpoint,
      auth: context.token
    });

    sdk.runPersistedQuery('aem-demo-assets/gql-demo-teaser', { path: `/content/dam/${context.project}/site/en/home/components/hero` })
      .then(({ data }) => {
        if (data) {
          setContent(data);
        }
      })
      .catch((error) => {
        console.log('here');
        error.message = `Error with gql-demo-teaser request:\n ${error.message}`;
        handleError(error);
      });
  }, [context, handleError]);

  return (
    <div className='main-body'>
      <div>{Object.keys(content).length && (
        <Teaser content={content} />)}</div>
    </div>
  );
};

export default Home;
