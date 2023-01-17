var samochod = function (cena, rokzakupu, marka) {
	this.cena = cena;
	this.rokzakupu = rokzakupu;
	this.marka = marka;

	this.wiek = function () {
		console.log(2018 - rokzakupu);
	}

	this.cenaweuro = function(){
		console.log(cena * 4);
	}

}
function opis(samochod) {
	console.log(samochod.cena);
	console.log(samochod.rokzakupu);
	console.log(samochod.marka);

	console.log(typeof (samochod.cena));
	console.log(typeof (samochod.rokzakupu));
	console.log(typeof (samochod.marka));

	samochod.wiek();
	samochod.cenaweuro();

}

var obj1 = new samochod(50000, 1997, 'Ford');

opis(obj1);