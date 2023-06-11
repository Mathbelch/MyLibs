// Formatting a date yyyy-mm-dd to yyyy/mm/dd:

var date = '2007-12-31';
// Regex to find all '-' in a string:
var exp = /-/g; 
// Replacing all matches from Regex (-)to '/':
console.log(date);
date = date.replace(exp, '/'); 
console.log(date);

