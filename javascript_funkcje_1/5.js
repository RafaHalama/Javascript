

function ciag(n){

var arr = n.split(' ');
var max = "";
  for(var i=0;i<arr.length;i++){
	  if(arr[i].length > max.length)
	  {
		  max = arr[i];
	  }
  }
	return max;

  
}

console.log(ciag("ala madfdfdfd kota"));