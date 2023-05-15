# Lesson 1 

## Configuring the `.env` file & starting the app.  

1. Create a file named `.env` at the root of the project.  In this file we will set a few values.

```javascript
REACT_APP_AEM=<URL of the AEM instance>
REACT_APP_ENDPOINT=<the name of your endpoint>
REACT_APP_PROJECT=<the name of your folder with CF's>
REACT_APP_TOKEN=<developer token>
```

2. You can retrieve a developer token in Cloud Manager. Log in to Adobe Cloud Manager by navigating [here](https://experience.adobe.com/).  Click Experience Manager > Cloud Manager.  Choose the appropriate program and then click the 3 dots next to the environment.

![developer console](./assets/developer-console.png)

3. Click in the Integrations tab
4. Click Local Token tab & Get Local Development Token button
5. Copy the access token beginning after the open quote until before the close quote.
6. Paste the copied token into the `.env` file above.
7. Let's now build the app by entering `npm ci` in the terminal.
8. Now we can begin the local app and by entering `npm run start`.
9. You will find in [./src/utils](./src/utils/) a file call `context.js` that include the necessary code to set the values in the `.env` file into the context of the app.

## Connect the app to AEM 

1. In order to connect our App to AEM, lets add a few things to our `App.js`.  In our first import we need to add `useContext`.

```javascript
import React, {useContext} from 'react';
```

We also need to define our `AppContext` by the `context.js` file.

```javascript
import { AppContext } from './utils/context';
```

Now within our app code let define a context variable.

```javascript
const context = useContext(AppContext);
```

And, finally we will wrap our return code in our `AppContext.Provider`.

```javascript
<AppContext.Provider value={context}>
 
 
</AppContext.Provider>
```

For reference, our `App.js` should now be like this.

```javascript
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
```

2. Now we will need to import the `AEMHeadless` library.  This library is a helper library that we will use within out app.

Add this import statement to the home.js.

```javascript
import AEMHeadless from '@adobe/aem-headless-client-js';
```
We also will want to import `{ useContext, useEffect, useState }` in our first REACT import statement.

```javascript
import React, { useContext, useEffect, useState } from 'react';
```

We will also need to import our context.

```javascript
import { AppContext } from '../../utils/context';
```

And inside our component, we will define a `context` variable.

```javascript
const Home = () => {
  const context = useContext(AppContext);
```

2. We will now instatiate the sdk.  Let's add a new `const` inside of `useEffect()`.

```javascript
useEffect(() => {
  const sdk = new AEMHeadless({
    serviceURL: context.url,
    endpoint: context.endpoint,
    auth: context.token
  });
}, [context]);  
```

NOTE: There is a `context.js` file under `/utils` that is reading elements from the `.env` file.  For reference, the `context.url` is the URL of your sandbox environment.  The `context.endpoint` is the full path to your endpoint created in the previous lesson.  Lastly, the `context.token` is the developer token.

3. Let's create two new `const` that writes and reads the asyncronous content coming from the sdk.

```javascript
const Home = () => {
  const [content, setContent] = useState({});
```

4. We now need to connect our app to to AEM.  We will use a persisted query that we created a saved in the previous lesson.  Let's add the following code insite of `useEffect` after the the sdk is initialized.

```javascript
  sdk.runPersistedQuery('<name of your endpoint>/<name of your persisted query>', { path: `/content/dam/${context.project}/<name of your teaser fragment>` })
    .then(({ data }) => {
      if (data) {
        setContent(data);
      }
    })
    .catch((error) => {
      console.log(`Error with pure-headless/teaser. ${error.message}`);
    });
}, [context]);
```

We also need to pass the `context` variable to `useEffect()` as you will see above.

5. Let's now look at the developer tools in our browser and view the GraphQL request.

![dev tools](./assets/dev-tools.png)

The SDK will encode the request for GraphQL and add then necessary parameters.  You may open the request in the browser.  (NOTE: Since the request is going to the author environment you will need to be logged into the enviroment in another tab of the same browser.)

`<url to environment>/graphql/execute.json/pure-headless/teaser%3Bpath%3D%2Fcontent%2Fdam%2Fpure-headless%2Fhero`

6. Let's now print out some of this content on the page.  We can return a `<div />` with the teaser's title.

```javascript
return (
  <div className='main-body'>
    <div>{content.component && (content.component.item.title)}</div>
  </div>
);
```

You should see the title field of your teaser printed on the screen.

7. Last step of this lesson is to add the teaser to the page.  I have included a REACT teaser component in the package.  First, let's include the import.  At the top of the `home.js` file, add the line:

`import Teaser from '../../components/teaser/teaser';`

Now let's update the return statement:

```javascript
return (
  <div className='main-body'>
    <div>{content.component && <Teaser content={content.component.item} />}</div>
  </div>
);
```

You should now see the teaser with the content included within the fragment.

