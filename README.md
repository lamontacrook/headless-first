# Lesson 1 

## Connect the app to AEM 

1. We first need to import the `AEMHeadless` library.  This library is a helper library that we will use within out app.

Add this import statement to the home.js.

`import AEMHeadless from '@adobe/aem-headless-client-js';`

2. We will now instatiate the sdk.  Let's add a new `const` inside of `useEffect()`.

```javascript
useEffect(() => {
    const sdk = new AEMHeadless({
      serviceURL: context.url,
      endpoint: context.endpoint,
      auth: context.token
    });
    ...
```

NOTE: There is a `context.js` file under `/utils` that is reading elements from the `.env` file.  For reference, the `context.url` is the URL of your sandbox environment.  The `context.endpoint` is the full path to your endpoint created in the previous lesson.  Lastly, the `context.token` is the developer token.

3. Let's create two new `const` that writes and reads the asyncronous content coming from the sdk.

```javascript
const Home = () => {
  const [content, setContent] = useState({});
```

4. We now need to connect our app to to AEM.  We will use a persisted query that we created a saved in the previous lesson.  Let's add the following code insite of `useEffect`.

```javascript
  ...

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