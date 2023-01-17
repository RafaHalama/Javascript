


function amountTocoins(cena, args) {
	var tab = [];
	var pos = 0;
	var i = 0;
	while (cena > 0) {
		if (cena >= args[pos]) {
			cena -= args[pos];
			tab[i] = args[pos];
			i++;
		}
		else {
			pos++;
		}
	}

	return tab;






}

console.log(amountTocoins(46, [12, 10, 5, 2, 1]));