import React, { useContext, useEffect, useState } from 'react';
import AEMHeadless from '@adobe/aem-headless-client-js';
import { AppContext } from '../../utils/context';
import Teaser from '../../components/teaser/teaser';

import './home.css';

///graphql/execute.json/pure-headless
const context = ({
  endpoint: `/content/_cq_graphql/${REACT_APP_ENDPOINT}/endpoint.json`,
  url: 'https://author-p109262-e1066066.adobeaemcloud.com/',
  project: 'pure-headless',
});

const Home = () => {
  const context = useContext(AppContext);
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

  }, [context]);

  return (
    <div className='main-body'>
      <div>{content.component && <Teaser content={content.component.item} />}</div>
    </div>
  );
};

export default Home;
