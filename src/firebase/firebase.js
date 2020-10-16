import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
 };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export{firebase, database as default};













// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 		snapshot.forEach((childSnapshot) => {				// this funciotn gets called one time for each expense
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 	console.log(expenses);
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {				// this funciotn gets called one time for each expense
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});

// database.ref('expenses').push({
// 	description: 'description1',
// 	note: 'note1',
// 	amount: '5',
// 	createdAt: 132413243141
// });

//database.ref('notes/-MJAZaurHNWzk6LnC5U7').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// database.ref().set({							// set returns a promise
// 	name: 'Josh Londt',
// 	age: 26,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States'
// 	}
// }).then(() => {									// then is the resolve condition of that promise
// 	console.log('Data is saved!');
// }).catch((e) => {								// catch is the reject condition of that promise
// 	console.log('This failed.', e);
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });


// const onValueChange = database.ref().on('value', (snapshot) => {			// .on watches for changes in the database and stores the function in onValueChange
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);										// .off unsubscribes from onValueChange
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database.ref().remove(
// ).then(() => {
// 	console.log('Removed');
// }).catch((e) => {
// 	console.log('Failed to remove');
// });