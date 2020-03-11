import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDB3r0AIcLxBBCVlpMSMQsebrLKI9WgLc0',
  authDomain: 'interactive-coolture.firebaseapp.com',
  databaseURL: 'https://interactive-coolture.firebaseio.com',
  projectId: 'interactive-coolture',
  storageBucket: 'interactive-coolture.appspot.com',
  messagingSenderId: '942506865328',
  appId: '1:942506865328:web:287b29e1295da135734175',
  measurementId: 'G-0PH98FLPXJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
