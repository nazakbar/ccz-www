import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyA80XeWukFJrIwmtKdzXw5n5fMgiClBPTE',
	authDomain: 'concrezan-webapp.firebaseapp.com',
	databaseURL: 'https://concrezan-webapp.firebaseio.com',
	projectId: 'concrezan-webapp',
	storageBucket: 'concrezan-webapp.appspot.com',
	messagingSenderId: '445822360903'
};
firebase.initializeApp(config);

export default !firebase.apps.length
	? firebase.initializeApp(config).database()
	: firebase.app().database();

export const database = firebase.database();