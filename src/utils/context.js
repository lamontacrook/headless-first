import { createContext } from 'react';

const {REACT_APP_ENDPOINT, REACT_APP_AEM, REACT_APP_PROJECT, REACT_APP_TOKEN} = process.env;
export const AppContext = createContext({
  endpoint: `/content/_cq_graphql/${REACT_APP_ENDPOINT}/endpoint.json`,
  url: REACT_APP_AEM,
  project: REACT_APP_PROJECT,
  token: REACT_APP_TOKEN
});
