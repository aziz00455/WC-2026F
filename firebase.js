// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYn3EvDLaUfxxxFx_2Y__5SvX-Z4m1G7Q",
  authDomain: "wc-2026f-prd.firebaseapp.com",
  projectId: "wc-2026f-prd",
  storageBucket: "wc-2026f-prd.firebasestorage.app",
  messagingSenderId: "1041886294433",
  appId: "1:1041886294433:web:b1372700d85644d0f59be0",
  measurementId: "G-KP1T2TYZYB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// **** Instance Identifyer ****
const GAME_ID = "WC2026F_PRD";
