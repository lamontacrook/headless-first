# Building a Pure Headless Site

## Setup Environment

What you need.

- [Node.js v16+](https://nodejs.org/en/)
- [npm 6+](https://www.npmjs.com/)
- [Git](https://git-scm.com/) 

We would advise using NVM to address having multiple versions of node.js on the same machine.

We will be using Visual Studio Code in the lab.  Ensure that you have GitHub Extension installed.

For the session everyone will be creating a site using Google Drive or Sharepoint and Github.  Come to the session with your own Github account.  We would recommend using a personal account.  You may use Google Drive or Sharepoint, however you will need to have the ability to share the folder outside of your organization.  A personal Google Drive account might be the easiest.

Ensure that you have privileges to install libraries globally on your computer during the session.

To validate that you have everything setup correctly, open visual studio code an select "Terminal" from menu bar and select "New Terminal".  Type

`node -v`

If nodel was correctly installed it will print out the version. For NPM, you can type:

`npm -v`

And for git, you can type:

`git -v`

If everything is installed correctly, all of these commands will repond with the version installed.

There is a slack channel available should you need support with setup in advance to the workshop.

[Dev Workshop Slack](https://adobe-dx-support.slack.com/archives/C037U87UYC9/p1665586411118719)




## Build Models

1. Navigate to Tools > Configuration Browswer and we will create a new configuration.

![Create folder](./assets/create-configuration.png)

We will give it a title and name and select GraphQL Persisted Queires and Content Fragment Models.

2. Navigate to Tools > Content Fragment Models and click into the folder with the name of the configuration you just created.

![Model Folder](./assets/model-folder.png)

3. Inside the folder we will create a new model called Teaser.  Click create and give the model the name "Teaser".  To our teaser model we will give the follow datatypes.

| Datatype | Name | Required | Options |
|----------|------|----------|---------|
| Content Reference | Asset | yes | Add a default image if you'd like.  Ex: /content/dam/wknd-headless/assets/AdobeStock_307513975.mp4 |
| Single line text | Title | yes |
| Single line text | Pre-Title | no |
| Multi line text | Description | no | Ensure default type is rich text |
| Enumeration | Style | yes | Render as dropdown.  Options are Hero -> hero and Featured -> featured |

![Teaser model](./assets/teaser-model.png)

4. Inside the folder we will create a second new model called Offer.  Click create and give the model the name "Offer".  To our offer model we will give the follow datatypes.

| Datatype | Name | Required | Options |
|----------|------|----------|---------|
| Conent Reference | Asset | yes | Add default image. Ex: /content/dam/wknd-headless/assets/AdobeStock_238607111.jpeg |
| Single line text | Call to Action | yes | |
| Multi line text | Description | no ||

![Offer model](./assets/offer-model.png)


5. Inside the folder we will create a second new model called Image List.  Click create and give the model the name "Image List".  To our imagelist model we will give the follow datatypes.

| Datatype | Name | Required | Options |
|----------|------|----------|---------|
| Fragement Reference | List Items | yes | Render as Multiple Field.  Allowed content fragment model is Offer. |

![Image List Model](./assets/imagelist-model.png)

## Create Content

1. Now navigate to Assets and let's create a folder for our new site. Click create and name your folder.

![Add folder](./assets/create-folder.png)

2. After the folder is created, select the folder and choose the properties navigation item.

3. In cloud configurations, change the configuration to our new configuration that we created at the beginning of this tutorial.

![cloud config](./assets/cloud-config.png)

4. Let's now click into our new folder and create a teaser.  Click "Create" and "Content Fragment" and select the Teaser model.  Give the model a name and click "Create" and name it "Hero".

| Name | Notes |
|----------|------|
| Asset | You may leave this as default value or choose a different asset (video or image). |
| Title | Explore. Discover. Live. |
| Pre-Title | Join use for your next adventure. |
| Description | You may leave blank. |
| Style | Choose Hero. |

![hero fragment](./assets/teaser-model.png)

## Create an endpoint

1. Navigate to Tools > GraphQL.

![graphql](./assets/endpoint-nav.png)

2. Click "Create" and give your new endpoint a name and choose the newly created configuration.

![endpoint](./assets/endpoint.png)

3. Let's test our new endpoint.  Navigate to Tools > GraphQL Query Editor and choose our endpoint for the top right drop down.

4. In the query editor let's create a few different queries.  First (easiest).

```
{
  teaserList {
    items {
      title
    }
  }
}
```
You should get a list of 1 fragment that you just created.

For our exercise, let's create a full query that our app can use.

```javascript
query TeaserByPath($path: String!) {
  component: teaserByPath(_path: $path) {
    item {
      __typename
      _path
      _metadata {
        stringMetadata {
          name
          value
        }
      }
      title
      preTitle
      style
      asset {
        ... on MultimediaRef {
          __typename
          _authorUrl
          format
          _publishUrl
        }
        ... on ImageRef {
          __typename
          _authorUrl
          _publishUrl
          mimeType
          width
          height
        }
      }
      description {
        html
        plaintext
      }
    }
  }
}
```
In the query variable box, enter:

```
{
  "path": "/content/dam/pure-headless/hero"
}
```

NOTE: You will need to adjust this based your folder and fragment names.

Run the query and you should receive the results of the fragment just created.

5. Now let's persist (save) the query and give it a name (teaser).  Click the "Save" button in the GraphiQL interface.

## Clone the project

1. In Visual Studio Code, select the wheel icon in the lower left and select the command pallet.

![command-pallet](./assets/command-palet.png)

