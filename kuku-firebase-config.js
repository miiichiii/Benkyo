// Firebase Console の「プロジェクトの設定」→「全般」→「ウェブアプリ」から
// firebaseConfig をコピーして、enabled を true にしてください。
//
// 親ビューアは parentEmail のGoogleアカウントでログインした時だけ開きます。
// Firebase Console の Authentication で Google プロバイダも有効にしてください。
window.KUKU_FIREBASE_CONFIG = {
  enabled: false,
  familyCode: 'hamada-kuku',
  childId: 'ayame',
  childName: 'あやめちゃん',
  parentEmail: 'hamamicchi@gmail.com',
  firebaseConfig: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};
