function Palindrom(n) {
  var palindrom = n.split('').reverse().join('');
  palindrom = palindrom.replace(/\s+/g, '');
  n = n.replace(/\s+/g, '');
  palindrom = palindrom.toLowerCase();
  n = n.toLowerCase();
  if (palindrom.localeCompare(n) === 0)
    return true;
  else
    return false;
}
console.log(Palindrom("ala"));
console.log(Palindrom("Kobyła ma mały bokdfdfd"));