import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Auth 연결
import { getFirestore } from "firebase/firestore"; // Database 연결
import { getStorage } from "firebase/storage"; // storage 연결

const firebaseConfig = {
    apiKey: "AIzaSyDVTbXoJphYOCnMjsDf8pEYemuqBwTh5vo",
  authDomain: "crud-7eda2.firebaseapp.com",
  projectId: "crud-7eda2",
  storageBucket: "crud-7eda2.appspot.com",
  messagingSenderId: "631812625580",
  appId: "1:631812625580:web:156a8420f1233f700c3b09",
  measurementId: "G-1829DS23NQ"
};

const app = initializeApp(firebaseConfig); // 초기화 
const auth = getAuth(app); // 유저 정보 관리
const dbService = getFirestore(app); // DB 관리 => 
const storage = getStorage(app); // 파일이나 사진등 텍스트가 아닌 내용 저장 . 

export { app, auth, dbService,storage }; // 다른 화면에서 사용할 수 있게 