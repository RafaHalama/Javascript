

function  pierwsza(n){  
var i;
var pierwsza = true;
for (i = 2; i < n; i++) { 
   if(n%i==0){
	   	   return('liczba nie jest pierwsza');

	  pierwsza = false;
	  break;
   }
}

if(pierwsza){
return('liczba jest pierwsza');
}
return;
}

console.log(pierwsza(0));
console.log(pierwsza(1));
console.log(pierwsza(4));
