import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/analytics';
import '@firebase/performance';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKV2y6L8hZbe7lJ9bNRTKGCVgeI08S4b0',
  authDomain: 'www.thegirlmanual.com',
  databaseURL: 'https://interactive-coolture.firebaseio.com',
  projectId: 'interactive-coolture',
  storageBucket: 'interactive-coolture.appspot.com',
  messagingSenderId: '942506865328',
  appId: '1:942506865328:web:c9d5e7c0a47cfeb1734175',
  measurementId: 'G-0HWK701LM3',
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const performance = firebase.performance();
firebase
  .firestore()
  .enablePersistence()
  .catch(error => {
    // eslint-disable-next-line no-console
    console.warn(
      `Could not enable Firestore persistence. Something went wrong: ${
        error.code
      }`,
    );
  });

const rsf = new ReduxSagaFirebase(app);

const logEvent = args => {
  analytics.logEvent(...args);
  return true;
};

export { app, analytics, performance, logEvent };
export default rsf;
