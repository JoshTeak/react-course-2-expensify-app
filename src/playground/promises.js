const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Josh',
			age: 30
		});
		reject ('Something went wrong!');
	}, 1500);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('this is my other promise');
		}, 4000);
	});
}).then((str) => {
	console.log('does this run?', str);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');