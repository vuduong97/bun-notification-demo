import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

export const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
      });

      try {
        const messaging = firebase.messaging();

        const fcm_token = await messaging.getToken({
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAP_ID_KEY,
        });
        return fcm_token;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
