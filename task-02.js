const countProps = function(obj) {
	let total = 0;
	const key = Object.values(obj);
	const mass = [ ...key ];
	for (let i = 0; i < mass.length; i += 1) {
		if (mass[i]) {
			total += 1;
		}
	}
	return total;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
