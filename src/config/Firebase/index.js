import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC3LgXf7loNzVUIP2m1DWqm7By_M1BxeFI',
  authDomain: 'backend-1bb38.firebaseapp.com',
  databaseURL: 'https://backend-1bb38-default-rtdb.firebaseio.com',
  projectId: 'backend-1bb38',
  storageBucket: 'backend-1bb38.appspot.com',
  messagingSenderId: '51792118256',
  appId: '1:51792118256:web:a7da0eb4135a9614861d35',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
