// importScripts(
//   "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js"
// );
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//   apiKey: "AIzaSyDWm1h9WXp1WhBHkyhLx1V7k2Vsd4Y",
//   authDomain: "fcm-test-427ad.firebaseapp.com",
//   projectId: "fcm-test-427ad",
//   storageBucket: "fcm-test-427ad.appspot.com",
//   messagingSenderId: "497170287573",
//   appId: "1:497170287573:web:f7ae63c62c510382ae0b5c",
//   measurementId: "G-4Y59MKWS67",
// });
// // Retrieve an instance of Firebase Messaging so that it can handle background

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const title = payload.data.title;
//   const options = {
//     body: payload.data.body,
//     data: { url: payload.data.url },
//     image: payload.data.image,
//   };
//   return self.registration.showNotification(title, options);
// });

// self.addEventListener("notificationclick", function (event) {
//   let url = event.notification.data.url;
//   event.notification.close();
//   event.waitUntil(
//     clients.matchAll({ type: "window" }).then((windowClients) => {
//       // Check if there is already a window/tab open with the target URL
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i];
//         // If so, just focus it.
//         if (client.url === url && "focus" in client) {
//           return client.focus();
//         }
//       }
//       // If not, then open the target URL in a new window/tab.
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });
