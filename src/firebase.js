// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAMAfDuyLfxJDDbKLP3T9e0HyW89pnAud0',
	authDomain: 'todo-app-2ccbf.firebaseapp.com',
	projectId: 'todo-app-2ccbf',
	storageBucket: 'todo-app-2ccbf.appspot.com',
	messagingSenderId: '261549940514',
	appId: '1:261549940514:web:c1ca4ae82e4d3500618f7b',
	measurementId: 'G-EG52L94FHY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
