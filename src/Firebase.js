// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/storage';

// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyAn23Q06BxFpmp6ohKzAoYwxixnNtvIw_o",
//   authDomain: "do-it-f2fe4.firebaseapp.com",
//   projectId: "do-it-f2fe4",
//   storageBucket: "do-it-f2fe4.appspot.com",
//   messagingSenderId: "839115475104",
//   appId: "1:839115475104:web:d6597f33f7df85049ea1c5",
//   measurementId: "G-7GPY0D7F36"
// });
// var FireBase = firebaseConfig.firestore();

// export {
//   FireBase
// };

// export default firebaseConfig;

import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDeh0YjeqItSDNGYUnx8uVomjlVGdEWUXw",
  authDomain: "just-do-it-200c7.firebaseapp.com",
  databaseURL: "https://just-do-it-200c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "just-do-it-200c7",
  storageBucket: "just-do-it-200c7.appspot.com",
  messagingSenderId: "508557613741",
  appId: "1:508557613741:web:4c28602bad6898cba6c424",
  measurementId: "G-1DDE92986P"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {
  firebaseApp,db,auth
};

export default firebaseConfig;