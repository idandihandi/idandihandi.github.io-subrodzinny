// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCffBZPf5HdnsZW_XmRnnvMx9IH8K-Gynw",
  authDomain: "subrodzinny.firebaseapp.com",
  projectId: "subrodzinny",
  storageBucket: "subrodzinny.firebasestorage.app",
  messagingSenderId: "101440164805",
  appId: "1:101440164805:web:756b43a42bea39da90f1ac",
  measurementId: "G-KFB5VZL9F3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);