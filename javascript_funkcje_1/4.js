


function slowo(n) {


    var arr = n.split(''),
        sorted = arr.sort().join('').replace(/\s+/g, '');
    return sorted;
}

console.log(slowo('webmaster'));