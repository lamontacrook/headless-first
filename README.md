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

Open the Program containing the AEM as a Cloud Service environment to integrate with
Tap the ellipsis next to the environment in the Environments section, and select Developer Console
Tap in the Integrations tab
Tap Get Local Development Token button
Tap on the download button in the top left corner to download the JSON file containing accessToken value, and save the JSON file to a safe location on your development machine.
This is your 24 hour, developer access token to the AEM as a Cloud Service environment.
AEM Developer Console - Integrations - Get Local Development Token