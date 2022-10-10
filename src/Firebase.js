// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { collection, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDedrrdM1sfwunIk2jYEw6BwV40e0X1AoQ",

	authDomain: 'spydoweb-92e4b.firebaseapp.com',

	projectId: 'spydoweb-92e4b',

	storageBucket: 'spydoweb-92e4b.appspot.com',

	messagingSenderId: '166689254724',

	appId: '1:166689254724:web:54ae75af45523673db7b11',

	measurementId: 'G-4XVL7ZJKR4'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

let db = getFirestore(app);

const views_register = collection(db, 'views_register');
export {
	// Other exports
	views_register,
	db
};
