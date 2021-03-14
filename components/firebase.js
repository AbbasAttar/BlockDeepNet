import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8hANujnUZg9i4vRsJpQYTuzj3201PRyc",
  authDomain: "blockdeepnet.firebaseapp.com",
  databaseURL: "https://blockdeepnet-default-rtdb.firebaseio.com",
  projectId: "blockdeepnet",
  storageBucket: "blockdeepnet.appspot.com",
  messagingSenderId: "587963453357",
  appId: "1:587963453357:web:5d037f254a14b67e4f9b24",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
