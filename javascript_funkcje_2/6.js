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
student.prototype.listaPrzedmiotow = ["Grafika Komputerowa","Zarządzanie Projektem Informatycznym"];


function createStudent(imie,nazwisko,indeks){
  return new student(imie,nazwisko,indeks,[]);
}


var student = createStudent("Adam", "Małysz","15999");




