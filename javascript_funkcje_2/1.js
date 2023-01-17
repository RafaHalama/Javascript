

function minmax(args) {
	var max = args[0];
	var prevmax = 0;
	var min = args[0];
	var prevmin = Infinity;
	for (var i = 1; i < args.length; i++) {
		if (args[i] > max) {
			max = args[i];
		}
		if (args[i] < min) {
			min = args[i];
		}


	}

	for (var i = 0; i < args.length; i++) {
		if (args[i] > prevmax && args[i] < max) {
			prevmax = args[i];
		}
		if (args[i] < prevmin && args[i] > min) {
			prevmin = args[i];
		}


	}
	console.log(prevmax);
	console.log(prevmin);


}
const args = [5, 1, 2, 3, 4, 6];

(minmax(args));