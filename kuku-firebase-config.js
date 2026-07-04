// Firebase Console の「プロジェクトの設定」→「全般」→「ウェブアプリ」から
// firebaseConfig をコピーして、enabled を true にしてください。
//
// 親ビューアは parentEmail のGoogleアカウントでログインした時だけ開きます。
// Firebase Console の Authentication で Google プロバイダも有効にしてください。
window.KUKU_FIREBASE_CONFIG = {
  enabled: true,
  familyCode: 'hamada-kuku',
  childId: 'ayame',
  childName: 'あやめちゃん',
  parentEmail: 'hamamicchi@gmail.com',
  rive: {
    levelUpSrc: '',
    levelUpStateMachine: '',
    levelUpAnimation: ''
  },
  firebaseConfig: {
    apiKey: 'AIzaSyCfXq_Mlldi-eELMMW3h7q4peO6lT_smY8',
    authDomain: 'weakness-quiz-hamamicchi.firebaseapp.com',
    projectId: 'weakness-quiz-hamamicchi',
    storageBucket: 'weakness-quiz-hamamicchi.firebasestorage.app',
    messagingSenderId: '1078414220963',
    appId: '1:1078414220963:web:4996b93b702298219be916'
  }
};
