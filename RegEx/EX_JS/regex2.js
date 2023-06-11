
// 1 - USING THE RegExp JS Object:

// Defining Regex expression:
const textPattern = '(\\d\\d)(\\w)'; 
// *It's necessary to scape the Regex barr, so for '\d' we must write '\\d', where the first '\' is the scape for the second.


// Defining testString:
const testString = '11a22b33c';

// Creating a new instance of RegExp JS Object, applying this pattern globally 'g':
var exp = new RegExp(textPattern, 'g');

// Calling the JS RegExp method 'exec', which will return the result of the Regex applied on the testString:
console.log(`String: ${testString}\nRegex: ${textPattern}\nResults:`);
while (result = exp.exec(testString)) {
   console.log(result);
   console.log(exp.lastIndex);
}

console.log('\n')

// 2 - USING TEMPLATE LITTERAL:

// Defining Regex expression using the structure /Regex/g where g = global:
const textPattern2 = /(\d\d)(\w)/g; 
// *Here it's not necessary to scape the Regex barr.

// Calling the JS RegExp method 'exec', which will return the result of the Regex applied on the testString:
result2 = null;
console.log(`String2: ${testString}\nRegex2: ${textPattern2}\nResults2:`);
while (result2 = textPattern2.exec(testString)) {
   console.log(result2);
   console.log(textPattern2.lastIndex);
}


