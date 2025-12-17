import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from
"https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2WJdJLDNeRAeDpNsSpu7AP4eA6Mk_Wec",
  authDomain: "techverseskill.firebaseapp.com",
  projectId: "techverseskill",
  storageBucket: "techverseskill.appspot.com",
  messagingSenderId: "530477137468",
  appId: "1:530477137468:web:5fff40f6f1fee9b6228d39"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
