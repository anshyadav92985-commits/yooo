importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

// Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyAFP57-rvdlSMoTqEKtb8iB7WKdeQD0ElM",
  authDomain: "yoooo-a2adb.firebaseapp.com",
  projectId: "yoooo-a2adb",
  storageBucket: "yoooo-a2adb.firebasestorage.app",
  messagingSenderId: "649222863466",
  appId: "1:649222863466:web:37d24a4bf93734d7b02813"
});

// Initialize messaging
const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage(function(payload) {
  console.log("📩 Background Message:", payload);
  
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  });
});
