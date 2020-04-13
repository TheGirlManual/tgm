import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/analytics';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKV2y6L8hZbe7lJ9bNRTKGCVgeI08S4b0',
  authDomain: 'interactive-coolture.firebaseapp.com',
  databaseURL: 'https://interactive-coolture.firebaseio.com',
  projectId: 'interactive-coolture',
  storageBucket: 'interactive-coolture.appspot.com',
  messagingSenderId: '942506865328',
  appId: '1:942506865328:web:c9d5e7c0a47cfeb1734175',
  measurementId: 'G-0HWK701LM3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
