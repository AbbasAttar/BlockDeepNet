import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.ApiKey,
  authDomain: process.env.AuthDomain,
  databaseURL: process.env.DatabaseURL,
  projectId: process.env.ProjectID,
  storageBucket: process.env.StorageBucket,
  messagingSenderId: process.env.MessagingSenderID,
  appId: process.env.AppID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
