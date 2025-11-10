// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Importo për autentikim

// ⚙️ Konfigurimi yt Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCniTxiTOUtc0qv1BGlbCVnE8X6kjx4FTE",
  authDomain: "fir-ecfbf.firebaseapp.com",
  projectId: "fir-ecfbf",
  storageBucket: "fir-ecfbf.firebasestorage.app",
  messagingSenderId: "59661906063",
  appId: "1:59661906063:web:d6c2be769ce8e454e080fa",
  measurementId: "G-DWT75Z2EWV",
};

// Inicializo aplikacionin Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
