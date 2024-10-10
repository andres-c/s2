import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsHmFljSVArmS3yaytWTGIZ1QDPKaWhOg",
  authDomain: "fridgly-e9705.firebaseapp.com",
  projectId: "fridgly-e9705",
  storageBucket: "fridgly-e9705.appspot.com",
  messagingSenderId: "959552373945",
  appId: "1:959552373945:web:4492797fbeecadb3784768",
  measurementId: "G-6N55KNVC4Z"
};


// Initialize Firebase app with configuration
const app = initializeApp(firebaseConfig);

// Get Firebase authentication instance
const auth = getAuth(app);

// Get Firestore database instance
const db = getFirestore(app);

export { auth, db };