const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true
};
user.mood = 'happy';
user['hobby'] = 'skydiving';
user['premium'] = 'false';
console.log(user);
const keys = Object.keys(user);
let result;
for (let key of keys) {
	console.log(`key: ${key}, value: ${user[key]}`);
}
