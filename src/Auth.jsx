// 2022 06 21 기준 firebase import
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUXNkK2ELz5E2__WQMYnH7SAz1oxI7k30",
  authDomain: "search-engine-c6d9b.firebaseapp.com",
  projectId: "search-engine-c6d9b",
  storageBucket: "search-engine-c6d9b.appspot.com",
  messagingSenderId: "1046304289765",
  appId: "1:1046304289765:web:23070e0acb046ca81df50c",
  measurementId: "G-46E2FNRZTX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
