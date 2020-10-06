import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCeFenF-tGj--7cOlC_rm9Yomr7SvUXsrk",
  authDomain: "vue-portfolio-93961.firebaseapp.com",
  databaseURL: "https://vue-portfolio-93961.firebaseio.com",
  projectId: "vue-portfolio-93961",
  storageBucket: "vue-portfolio-93961.appspot.com",
  messagingSenderId: "970987045316",
  appId: "1:970987045316:web:5294ead13df42899d9e491",
  measurementId: "G-B463SBLR7W"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()