


function fibonacci(n) {


	var fib = 0;
	var last = 0;
	var last2 = 0;
	for (var i = 0; i <= n; i++) {
		if (i == 0) {
			fib = 0;
		}
		else if (i == 1) {
			fib = 1;
		}
		else {
			last2 = last;
			last = fib;
			fib = last + last2;
		}

	}

	return fib;
}

console.log(fibonacci(10));