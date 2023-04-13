# Lesson 1 

## Configuring the `.env` file.  

1. Create a file named `.env` at the root of the project.  In this file we will set a few values.

```
REACT_APP_AEM=<URL of the AEM instance>
REACT_APP_ENDPOINT=<the name of your endpoint>
REACT_APP_PROJECT=<the name of your project>
REACT_APP_TOKEN=<developer token>
```

2. You can retrieve a developer token in Cloud Manager. Log in to Adobe Cloud Manager by navigating [here](https://experience.adobe.com/).  Click Experience Manager > Cloud Manager.  Choose the appropriate program and then click the 3 dots next to the environment.

![developer console](./src/media/developer-console.png)

3. Click in the Integrations tab
4. Click Local Token tab & Get Local Development Token button
5. Copy the access token beginning after the open quote until before the close quote.
6. Paste the copied token into the `.env` file above.
7. Let's now build the app by entering `npm ci` in the terminal.
8. Now we can begin the local app and by entering `npm run start`.