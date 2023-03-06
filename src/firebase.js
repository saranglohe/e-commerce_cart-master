// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpB7J7z84wlvz18im_k3x0Vc0meV8KKMk",
  authDomain: "emailpasswordlogin-66a7f.firebaseapp.com",
  projectId: "emailpasswordlogin-66a7f",
  storageBucket: "emailpasswordlogin-66a7f.appspot.com",
  messagingSenderId: "243340455311",
  appId: "1:243340455311:web:591b05fd68a87f1639effa",
  measurementId: "G-YDL089BYZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app