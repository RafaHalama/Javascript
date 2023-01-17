function BinarySearch(A, n, T) {
	var L = 0;
	var R = n - 1;
	var m = 0;
	while (L <= R) {
		m = Math.floor((L + R) / 2);

		if (A[m] < T) {

			L = m + 1;
		}
		else if (A[m] > T) {
			console.log("2");

			R = m - 1;
		}
		else {
			return m;
		}
	}
}
const A = [1, 2, 4, 5, 6, 7];
console.log(BinarySearch(A, A.length, 4));