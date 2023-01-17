var silnia = 5;

var silniaRekurencyjnie = function (liczba) {
  if (liczba < 2) return 1;
  return liczba * (silniaRekurencyjnie(liczba - 1));
}

console.log("Silnia Rekurencyjnie " + silniaRekurencyjnie(silnia));

function silniaIteracyjnie(liczba) {
  var suma = 1;
  for (i = 1; i <= liczba; i++) {
    suma *= i;
  }
  return suma;
}

console.log(("Silnia Iteracyjnie " + silniaIteracyjnie(silnia)));