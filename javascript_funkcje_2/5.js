var Student= function(name, lastname, index, oceny) {
    this.name = name;
    this.last = lastname;
    this.index = index;
    this.oceny = oceny;
    var avg = 0;
    this.srednia = function(){
        for(var i =0; i<oceny.length;i++){
        avg+=oceny[i];   
        }
        console.log(name, lastname,avg/oceny.length);
    };
     
    
}
const oceny = [2,3,5,5];
var newstudent= new Student("Rafał", "Halama", 15252, oceny);
newstudent.srednia();