import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  android: {
    package: process.env.ANDROID_PACKAGE || 'com.yourcompany.yourapp'  // Set your Android package name here
  },
  extra: {
    ...config.extra,
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      icon: process.env.APP_ICON || './assets/images/logo.png',
      name: process.env.APP_NAME || 'App',
    },
    eas: {
      projectId: "c7702e07-dcd5-4562-abd3-5f9d03435279"
    }
  },
});
