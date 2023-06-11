// Formatting data to 'csv' format:

var file = '100,200-150,200;20';
var exp = /[,;-]/;
console.log(file);
file = file.split(exp);
console.log(file);