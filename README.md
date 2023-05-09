# Lesson 2 - Image List Component

## Create an Image List

1.  We now need to create some offer fragments and an image list component.  Navigate to the content fragment console.

![create-imagelist-fragment](./assets/create-imagelist-fragment.png)

We want to create a fragment of the type `imagelist` (model is imagelist) and we'll give it the title imagelist.

In the Content Fragment editor we have the opportunity to select a fragment to include or create a new fragment.  Select create a new fragment.



2. Let's return to the query editor and create the imagelist component.

{
  imagelistList {
    items {
      _path
    }
  }
}
