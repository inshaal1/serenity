// //ARRAYS USED IN THE CODE
// let sentence = "hello! I'm Inshaal";// later changed too
// var arr = [1, 22, 3, 66, 7, 3, 8];
// //-------------------------------------------
// //TASK1
// function EvenNumbers() {
//   for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }
// }
// EvenNumbers();

// //task2
// function MultiplicationTable() {
//   for (let i = 1; i <= 10; i++) {
//     console.log("multiplication table of", i);
//     for (let j = 1; j <= 10; j++) {
//       console.log(i + " * " + j + " = " + i * j);
//     }
//     console.log("__________");
//   }
// }
// MultiplicationTable();

// //task3
// function KilometersToMiles(km) {
//   const mile = 0.621371;
//   return km * mile;
// }
// let kilometers = 12,
//   miles = KilometersToMiles(kilometers);
// console.log(kilometers, " is equal to", miles, "miles");

// //task4
// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// let totalSum = arraySum(arr);
// console.log("Sum of array:", totalSum);

// //task5
// var j = 6;
// function substitute() {
//   let temp = 0;
//   for (var i = 0; i < arr.length / 2; i++) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//   }
//   console.log("Substituted Array:", arr);
// }
// substitute();

// //task6
// function sort() {
//   let temp = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log("Sorted Array:", arr);
// }
// sort();

// //TASK7
// function filternegative(arr) {
//   let arr2 = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr2[index] = arr[i];
//       index++;
//     }
//   }
//   return arr2;
// }
// let arr3 = filternegative(arr);
// console.log("Negative Filtered Array:", arr3);

// //task8
// function removespaces(str) {
//   let sentencewithnospace = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       sentencewithnospace += str[i];
//     }
//   }
//   return sentencewithnospace;
// }
// let outputsentence = removespaces(sentence);
// console.log("Removed Spaces String:", outputsentence);

// //task9
// function CheckIfDivisible(number) {
//   return number % 10 === 0;
// }
// let number = 5;
// let output = CheckIfDivisible(number);
// console.log("Is the number ", number, " divisible by 10: ", output);

// //task10
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     } else if (
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// let vowelCount = countVowels(sentence);
// console.log("No of vowels in the sentence", vowelCount);

// //TASK11
// function maxnum(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let maxnumber = maxnum(arr);
// console.log("Max number is: ", maxnumber);

// //task12
// function palindromecheck(arr) {
//   let NoSpaceString = removespaces(arr);
//   NoSpaceString = toLowerCase(NoSpaceString);
//   let reversestring = "";
//   for (let i = NoSpaceString.length - 1; i >= 0; i--) {
//     reversestring += NoSpaceString[i];
//   }
//   return reversestring == NoSpaceString;
// }
// function removespaces(str) {
//   let sentencewithnospace = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       sentencewithnospace += str[i];
//     }
//   }
//   return sentencewithnospace;
// }
// function toLowerCase(str) {
//   let lowerStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === "A") lowerStr += "a";
//     else if (char === "B") lowerStr += "b";
//     else if (char === "C") lowerStr += "c";
//     else if (char === "D") lowerStr += "d";
//     else if (char === "E") lowerStr += "e";
//     else if (char === "F") lowerStr += "f";
//     else if (char === "G") lowerStr += "g";
//     else if (char === "H") lowerStr += "h";
//     else if (char === "I") lowerStr += "i";
//     else if (char === "J") lowerStr += "j";
//     else if (char === "K") lowerStr += "k";
//     else if (char === "L") lowerStr += "l";
//     else if (char === "M") lowerStr += "m";
//     else if (char === "N") lowerStr += "n";
//     else if (char === "O") lowerStr += "o";
//     else if (char === "P") lowerStr += "p";
//     else if (char === "Q") lowerStr += "q";
//     else if (char === "R") lowerStr += "r";
//     else if (char === "S") lowerStr += "s";
//     else if (char === "T") lowerStr += "t";
//     else if (char === "U") lowerStr += "u";
//     else if (char === "V") lowerStr += "v";
//     else if (char === "W") lowerStr += "w";
//     else if (char === "X") lowerStr += "x";
//     else if (char === "Y") lowerStr += "y";
//     else if (char === "Z") lowerStr += "z";
//     else lowerStr += char;
//   }
//   return lowerStr;
// }
// sentence = "A man a plan a canal Panama";
// let booloutput = palindromecheck(sentence);
// console.log("Is the sentence a plaindrome: ", booloutput);

