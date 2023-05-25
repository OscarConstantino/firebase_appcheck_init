# firebase_appcheck_init

Firebase test lab init source

## Instalation steps

1.- Clone the repository

```bash
git clone https://github.com/OscarConstantino/firebase_appcheck_init.git
```

2.- Init the firebase project

```bash
cd firebase_appcheck_init
firebase init hosting
```

 ** Note: select the public folder as the directory that will contain Hosting assets.

You can use a new or an active Firebase project. You can use either a Blaze or Spark project plan.

2.1.- (Optional) Make sure to have the next services active and double check if the project has blocking firebase rules:
  
  * Cloud Storage
  * Realtime Database
  * Cloud Firestore
  * Authentication
     * Make sure to have anonymusly and google sign in methods
    
3.- Update the firebase config file with the project's settings:

  * Go to the public/utils/init.js file
  * Modify the firebaseConfig attribute with the project information

```javascript
const firebaseConfig = {
    apiKey: "***********************************",
    authDomain: "********************",
    databaseURL: "***********************",
    projectId: "****************",
    storageBucket: "***********************",
    messagingSenderId: "************",
    appId: "*******************************"
  };
```

   ** TIP: you can find this in the Firebase Console, in the project settings and the web app registration section.
   
 4.- Deploy the content to the Firebase Hosting service
 
 ```bash
firebase deploy
```
