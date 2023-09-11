import React, { useContext, useEffect, useState } from 'react';
import AEMHeadless from '@adobe/aem-headless-client-js';
import { AppContext } from '../../utils/context';
import Teaser from '../../components/teaser/teaser';

import './home.css';

const Home = () => {
  const context = {
    endpoint: '/graphql/execute.json',
    url: '<AEM Instance>',
    project: '<Assets Folder>',
  };
  const [content, setContent] = useState({});

  useEffect(() => {
    const sdk = new AEMHeadless({
      serviceURL: context.url,
      endpoint: context.endpoint,
      fetch: ((resource, options={}) => {
        options.credentials = 'include';
        return window.fetch(resource, options);
      })
    });


    sdk.runPersistedQuery('pure-headless/teaser', { path: `/content/dam/${context.project}/hero` })
      .then(({ data }) => {
        if (data) {
          setContent(data);
        }
      })
      .catch((error) => {
        console.log(`Error with pure-headless/teaser. ${error.message}`);
      });

  });

  return (
    <div className='main-body'>
      <div>{content.component && <Teaser content={content.component.item} />}</div>
    </div>
  );
};

export default Home;
