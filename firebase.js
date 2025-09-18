<!-- Firebase SDKs einbinden -->
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"></script>

<script>
  // 🔑 Hier deine Firebase-Konfiguration einfügen
const firebaseConfig = {
  apiKey: "AIzaSyAVWDaVdhprf2gmYqqEuZXZVWr19f-rnhQ",
  authDomain: "cover-des-jahres.firebaseapp.com",
  projectId: "cover-des-jahres",
  storageBucket: "cover-des-jahres.firebasestorage.app",
  messagingSenderId: "1021819931918",
  appId: "1:1021819931918:web:df5f509aae7a4c38371b5f"
};

  // 🔌 Firebase initialisieren
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
</script>
