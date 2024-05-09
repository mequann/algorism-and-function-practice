// function area(b,h)
// {
//     A=b*h/2;
//     return A;
// }
// console.log(area(8,2));
// //console.log(2+2)

// function grade(arr){
//     return arr[1]*5;
// }
// console.log(grade([2,6]));
/*==========Decision loop and object oriented programing:
practice exercises==== */
/*Question 1
● Write a function that prints the first 10 integers on the console starting from the number 1 using
the JavaScript for loop. */
// function firstTenNumbers(){
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }
// }
// console.log(firstTenNumbers());

/*Question 2
● Write a function that takes a single number as an argument and prints the next 5 numbers in the
console. Note: each output should be displayed on a new line.
○ Test case: If you give 7 to the function, output should look like this:
8
9
10
11
12 */
// function nextFiveNumbers(n){
//     for (let i = n+1; i <= n+5; i++) {
//         console.log(i)

//     }
// }
// (nextFiveNumbers(7))
/*Question 3
● Write a function that takes a single number and prints the sum of the next 10 numbers after the
given number.
○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
11+ 12+ 13+ 14+ 15+ 16+ 17 = 125) */
// function sumOfNextTenNumbers(a) {
//     let sum=0;
//     for (let i = a+1; i <= a+10; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }
// sumOfNextTenNumbers(7);
/*Question 4
● Write a function that takes an array as an argument and prints every element of the array on the
console.
○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
1
Hello
8
44 */
// function printArrayElement(arr){
//   if(Array.isArray(arr)){
//   for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i])

//          }
// }
// console.log( 'not array')
// }
//  printArrayElement(1, "Hello", 8, 44);
/**Question 5
● Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
○ Test case 2: Given the array a = ["world", 13], output should be: 2*/
// function printTotalNumberOfElements(arr) {
//     let len=arr.length;
//     //if(arr!==[])

//     return len;

// } console.log(printTotalNumberOfElements([1, "Hello", 8, 44]))
/*Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 +44
○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
3 + 0 */
// function sumOfArrayElement(arr) {
//   if(Array.isArray(arr)) {

//     let sumarr=0;
//     for (let i = 0; i < arr.length; i++) {

//         sumarr+=arr[i]
//     }
//     return sumarr;
//   }
//   return 'plase enter array'

// }
// console.log(sumOfArrayElement([5, 6, 99, 8, 76, 4, 68, 44]))
// console.log(sumOfArrayElement([3, 0]))
/*Question 7
● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
odd numbers of the array from the total sum of all even numbers and logs the result in the
console.
○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 102
■ Sum of odd numbers: 5 + 99 = 104
■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
■ Difference between total even and total odd numbers: 206 - 104 = 102 */
// function difference(arr7) {
//   if(Array.isArray(arr7)) {

//   let evenSum = 0;
//   let oddSum = 0;
//   let dif = 0;
//   for (let i = 0; i < arr7.length; i++) {
//     if (typeof(arr7[i])!=='number') {
//       return "invalid input";
//     }

//     if (arr7[i] % 2 === 0) {
//       evenSum = evenSum + arr7[i];
//     } else {
//       oddSum += arr7[i];
//     }

//     dif = evenSum - oddSum;
//   }
//   //console.log(evenSum)
//   //console.log(oddSum)
//   return dif;
// }
// return 'please enter a valid input'
// }
// console.log(difference([5, 6, 8, 99, 76, '4', 68, 44]));

/*Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car */
// function evenIndexElement(arr8) {
//   if(Array.isArray(arr8)) {
//     for (let i = 0; i < arr8.length; i++) {
//         if(i%2==0){
//         console.log(arr8[i]);
//         }

//     }
// }
// return "I can't do this unles you provide a valid input"
// }
// evenIndexElement([5, 6, 99, 8, 76, 4, 68, 44])
/**Questions on built in JavaScript methods
***********************************
Questions 9 and 10 are dependent on the sampleArray provided below:
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44]; */
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
/*Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method */
// sampleArray.pop()
// // sa)mpleArray.push(32)
// // console.log(sampleArray
/**Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.You should use this sorting syntax - sort(function(a, b){return a-b}); */
// let sampleArray=[5, 6, 99, 8, 76, 4, 68, 44]
// sampleArray.sort(function(a,b){
//     return a-b
// });
// console.log(sampleArray)

/** Questions on JavaScript objects
****************************
The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.*/
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

/** Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change*/
// evangadiClass.lengthOfCourse=5;
// console.log(evangadiClass.lengthOfCourse)
/** Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method*/
// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);
/*Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console */
function avarageAgeCalc(evangadiClass) {
  let sumAge = 0;
  let avarageAge = 0;
  //let n=evangadiClass.students.length;
  for (let i = 0; i < evangadiClass.students.length; i++) {
    //

    //console.log(evangadiClass.students[i].age);
    sumAge = sumAge + evangadiClass.students[i].age;
  }
  avarageAge = sumAge / evangadiClass.students.length;
  //console.log(sumAge)
  return avarageAge;
}
//console.log(n);
console.log(avarageAgeCalc(evangadiClass));
/** Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console*/

// function malePercettageCalc(evangadiClass) {
//         let numberOfMale=0;
//         let malePercet=0;
//         //let n=evangadiClass.students.length;
//         for (let i=0;i<evangadiClass.students.length;i++) {
//             if(evangadiClass.students[i].sex==='M'){
//                 numberOfMale++;

//             }

//         }
//         malePercet=numberOfMale*100/evangadiClass.students.length;
//         //console.log(sumAge)
//         return malePercet+"%";
//     }
// console.log(malePercettageCalc(evangadiClass))

/*==========Puzzles=======*/
/****
Question 15: Test the divisors of three
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number.
 */
// function testDiv3(n1,n2) {
//     for (let i = n1; i <=n2; i++) {
//         if (i%3==0) {
//             console.log( i +'div3')

//         }

//         console.log(i);
//     }

// }
// testDiv3(2,10)
/*Question 16: The famous coding interview question (FizzBuzz)
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".
 */
//========pseudo code
// define a function that without any parameter
// use loop(for) toiterate from 1 to 100
// check if the  numbers are both mulpiple of both 3 and 5
// if the case console.log(fizzbuss);
// else chechk if the number is multiple of 3
// if the case console Buzz
// else chechk if the number is multiple of 5
//  console Fizz
// function famousInterviewQuestion() {

//     for (let i = 1; i <= 100; i++) {
//         if(i%3==0&& i%5==0) {
//             console.log("FizzBuzz");
//             }
//        else if(i%3===0) {
//             console.log('Fizz')
//         }
//         else if(i%5===0) {
//             console.log('Buzz');

//         }

//     }
// }
// famousInterviewQuestion()
//

/**Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise. */

//=====pseudo code=====
// define a function that take a numbers as an argument
// convert the number to string;
// use for loop to check  whtear each digit is even or not
// if the case return 1
// else 0
// function isEven(n) {
//     let digit=n.toString()
//     let newDigit=[]
//     //let count=0
//     for (let i = 0; i < digit.length; i++) {
//         if(digit[i]%2==0) {
//             newDigit.push(digit[i])
//             //count++

//         }
//     }
//         if(digit.length===newDigit.length) {
//             return 1;
//         }
//     else
//     return 0;

//         //console.log(newDigit.length)

// }
// console.log(isEven(486))
//Methode 2
// function isEven(n) {
//   //let m;
//   while (n>0) {
//       let m=n%10;
//     console.log(m)
//     n=Math.floor(n/10)

//     if(m%2!==0) {
//       return 0;
//     }}

//   return 1;
// }
// console.log(isEven(6583))

//====================================

/*=========digit counter=============== */
//=====pseudo code======digit counter
// define a function that take numbers as an argument
//        function digitCounter(num) {

//      }
// define a variable tha countes the number of digits
//      let count=0
// divide the number by 10
//     num/10
// if the quitient is gretertha 1 loop and
//     while(num/10>=1)
// update) the Counter
//      counter++
// if not return the Counter
//        return counter
// function digitCounter(num) {
//     let count=1;
//     if (typeof(num)!=='number') {
//         return 'please  enter a valid input';
//     }
//     if(Math.abs(num)<=9)
//     return count;
// while (Math.abs(num/10)>=1) {
//     num=num/10;
//     count++

// }
//    return count  }
//      console.log(digitCounter(123))

//=======Advanced JavaScrip Algorithms - practice exercise========
/**Question 1 Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4] */
//  -define function that take an array as a parametrs
//  -define an empty array
//  -use for loop to iterate for each Element
//  -check each element eveness and
//  -check postion of each even element in the array even as well
//  -if both the element and it's postion are even
//  -add the element to the new array
// function evenArrayElement(arr){
//     let evenArray=[];
//         if (!Array.isArray(arr)) {
//        return 'please enter valid input array'
//         }
//         if (arr.some((element)=>typeof element!=='number')) {
//           return `I can't compute this Ok!!`

//         }
//         else{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0&&i%2==0) {
//             evenArray.push(arr[i]);
//          }

//      }
//         }
//     return evenArray;
// }
// console.log(evenArrayElement([0, 1, 2, 3, 4]));

////|||=========way2222222222222====||||
//||||||||||||||||||
function evenArrayElement(arr) {
  let evenArray = arr.filter((el, index) => el % 2 === 0 && index % 2 === 0);

  return evenArray;
}
//console.log(evenArrayElement([0, 1, 2, 3, 4]));
/** Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
*/
//=====pseudo code======
//  define a function that takes two digit numbers as a parameters
//    -function compareValue(num) {}
//  declar a varaible that store the string version of the parameters
//    -let stringValue=num.string()
//  declare an other variable that can store the reversed string
//     -let reverseValue=stringValue.reverse()
//  check if the parameters are number and thier digit is equal two
//       -!isNaN(num)
//   if the the value of passed argument is greatherthan the reversed one
//       -stringValue>reverseValue
//   retrun ok
//   else return not ok

function compareValue(num) {
  let stringValue = num.toString().split("");
  //console.log(stringValue);
  let reverseValue = stringValue.reverse().join("");
  //console.log(reverseValue);
  if (isNaN(num) || stringValue.length !== 2) {
    return "please enter valid input";
  } else if (num > reverseValue) {
    return "OK";
  } else return "Not OK";
}
// console.log(compareValue(33));

function compareValue(num) {
  let a = (num - Math.floor(num / 10) * 10) * 10 + Math.floor(num / 10);
  //console.log(a);
  if (num > a) {
    return "ok";
  } else return "not ok";
}
//console.log(compareValue(23));
/**Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1 */
///=======pseudocode
// define a function that take posetive numbers as a parameter
// declare avaraible that stores the factorial ofthe given numbers
//-let fact=0
//     -function factorialOFAnumber(n) { }
// chech if the number is posetive and not a string
// define base case
//  - if n===0 return 1
// define recursive case
//    -while n greatherthan 0
//     n*factorialOFAnumber(n-1)
function factorialOFAnumber(n) {
  let fact = 0;
  if (isNaN(n) || n < 0) {
    console.log("not valid number");
  } else if (n === 0) {
    return 1;
  } else fact = n * factorialOFAnumber(n - 1);
  return fact;
}
console.log(factorialOFAnumber(6));
/**Question 4 (Meera array)
● A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6 */
//=========pseudocode========
// define a function that takes an array as a parameters
//    -function meeraArray(arr4){}
//  declar avariable the countes the occurence of zero in the given array
//    -let countZero=0
//     -if countZero >1 return I am not Meera aray
//  check each element of the array is a number or Not
//    -for loop used
//  check is there an element and its multiple of two in the array
//     - if the case return I am not Meera array
//     -else return I am meera  array

//   function meeraArray(arr4){
//     let count=0;
//     if(arr4.some((element)=>typeof element!=='number'))
//     return 'please entervalid values'
//     else if(!Array.isArray(arr4)) {
//    return 'plase enter an array'

//     }
//     else{
//     for (let i = 0; i < arr4.length; i++) {
//       if (arr4[i]!==0) {
//       if(arr4.indexOf(arr4[i]*2)!==-1)
//         return('I am not Meera Array');

//     }
//     else{
//       count++
//       if(count>1)
//       return('I am not Meera Array');
//     }
//       return('I am Meera array')
//   }
// }

//   }
//   console.log(meeraArray([10, 4, 6,5 ]))

// ======= |||||2nd2nd |||||||========
function meeraArray(arr4){
  if(!Array.isArray(arr4)) {
 return 'plase enter an array'
}
if(arr4.some((element)=>typeof element!=='number'))
  return 'please entervalid values'

 else
 {
  for (let i = 0; i < arr4.length; i++) {
  }
      for (let j = i+1; j < arr4.length; j++) {
  
      if((arr4[i])===arr4[j]*2)
       //console.log(arr4);
        return('I am not Meera Array');
  
    } 
     return('I am Meera array')
 }
}
console.log(meeraArray([10, 4, 6,3]))
/**Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0 */
function isDual(arr) {
  let count = 0;
  if (!Array.isArray(arr)) {
    return 'plase enter an array'
}
  else if(arr.some((element)=>typeof element!=='number'))
  return 'please entervalid values'
  
  else if (arr.length % 2 !== 0) {
    return 0;
  }
  else{
    for (let i = 0; i < arr.length; i++) {
      count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
  
      if (count !== 2) return 0;
    }
  
    return 1;
  }
  
}
console.log(isDual([2, 5, 2, 5, 7, 7]));
/**
 * function isDual(arr){
                    if(!Array.isArray(arr)){  
                        console.log("invalid input");  
                        return   }
                    else{
                        for(let i=0; i<arr.length; i++){
                            if(typeof arr[i] !=="number" ) {
                            console.log("invalid element");
                                return;
                            }
                        }
                //logic
                if(arr.length%2!==0){ return 0;} 
                        arr.sort((a, b) => a - b)
                        for(let i=0; i<arr.length; i+=2){
                            if(arr[i] !== arr[i+1] || arr[i] == arr[i+2]){ return 0;} 
                        }
                        return 1;
                    }
                    }
 */
/**Question 6
● Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
 */
/**function digitalClock(sec)
{
  if(sec<0 || typeof sec !="number")
    return "please Enter non negative number only"
  else
  {
    
    let s=sec%60;
    sec=Math.floor(sec/60);
   let m=sec%60;
    sec = Math.floor(sec / 60);  //
    let h=sec%60;
    // let h = Math.floor(sec / 60);
  if(s<10)
     s="0"+s
  if(m<10)
      m="0"+m;
  if(h>23)
  {
       h=h%24;   
  }
  if (h < 10)
      h = "0" + h;
  return (h+":"+ m +":"+s);
  }
} */
function digitalClock(second) {
  let hours = Math.floor(second / 3600);
  let minutes = Math.floor((second - hours * 3600) / 60);
  let seconds = second - hours * 3600 - minutes * 60;

  let clock =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  if (hours >= 24) {
    hours = hours - 24;
    // return hours +"it is next day"
    clock =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0") +
      " " +
      "next day";
  }
  return clock;
}
// console.log(digitalClock(5025));
// console.log(digitalClock(61201));
// console.log(digitalClock(87000));

//========QUESTIONS THAT WORKED IN CLASS======
/*A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */
/*peseudocode
//define a function that takes a string as anargument
  -declar variable to save the hiden letters
//check each leter if lowercase or an upperCase
      -use for loop to iterate for each leter
      -if lowerCase save it on the variable
      else 
      skip
      -return it

*/
function hidenWord(a) {
  let hidenLetter = "";
  for (let i = 0; i < a.length; i++) {
    // we can also use charAt() methode
    // let singleLeter=a.charAt(i)
    // if(singleLeter===singleLeter.toLowerCase()) {
    //   hidenLetter+=a.charAt(i)

    // }
    if (a[i] === a[i].toLowerCase()) {
      hidenLetter += a[i];
    }
  }
  return hidenLetter;
}
// console.log(hidenWord("UcUNFYGaFYFYGtNUH"))
// console.log(hidenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))
/*write a function the return true if the first array is nested in the second array and 
false if not */
/*
-define a function that takes two array as an anrgument
-compare the min and max value of the two arrays
  -use sort or spread operator
-if the min of arr1 greaterthan  min2 and max of arr2 greather than max 1
  -retrun true
  else 
  false
 */
function nestedArray(arr1, arr2) {
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  if (min1 > min2 && max1 < max2) {
    return true;
  } else return false;
}
// console.log(nestedArray([1,2,4,8],[0,7]));
/*sort ana array */
/*define function that takes an array as an arguments
 -declare checher boolen
 -test ech step 
   -while loop
 -compere firs and next array element over and over until sorted all elements
    -through for loop
    if arra[i]>array[i+1]
     -boolen is true untill final sort
     -declare temporary variable
      -swap the values
  return array
 */
function sortArray(arr) {
  let j = false;
  //let sortarr=arr;
  while (!j) {
    j = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        j = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(sortArray([34,6,9,1,23]));
/*This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative */
/*peseudocode
-define a function that takes the N,E,S,W as an argument
-declare variable to store the postion
-check the arguments if given nor not
   -if not spesfied
       -assign 0 for each argument
*/
function trackRobot(N, E, S, W) {
  let position = [0, 0];
  if (N === undefined) {
    N = 0;
  }
  if (E === undefined) {
    E = 0;
  }
  if (S === undefined) {
    S = 0;
  }
  if (W === undefined) {
    S = 0;
  } else {
    position[0] = E - W;
    position[1] = N - S;
  }
  return position;
}
// console.log(trackRobot(20, 30, 10, 40));
/*ven vs. Odds
Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.
A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.
For instance:
[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...
[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.
For instance:
[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).
Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).
Given an array, calculate the number of liked spots.
Examples
availableSpots([0, 4, 6, 8], 9) ➞ 0
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.
availableSpots([0, 4, 6, 8], 12) ➞ 3
// 12 likes ALL of the spots.
availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
// 7 dislikes every spot except the last one at: [4, __, 5].
availableSpots([4, 4], 8) ➞ 1
 */
//===============pseudocode====
//define a function that takes an array and number as an argument
// -declare  avariable that count the availabele spots
//   -itterate through each
//      -if the consecutive element of the array is even and number is odd
//          -count
//          else if number is even or consecutive elements of the array is not odd
//             -count++

//   -if the consecutive element of the array is odd and numberis even
//           -count
//           else if  number is odd or consecutive elements of the array is not even
//           -count++
//     -return count
function spotCounter(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (n % 2 === 0) {
      if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
        count;
      } else count++;
    } else {
      if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
        //count;
      } else count++;
    }
  }
  return count;
}
// console.log(spotCounter([0, 4, 6, 8], 9));
// console.log(spotCounter([0, 4, 6, 8], 12));
// console.log(spotCounter([4, 4, 4, 4, 5], 7));
/**Mutations Only: Zeroes to the End
Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Examples
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]
Notes
You must mutate the original array.
Keep the relative order of the non-zero elements the same. */
//pseudocode
/**
 -define a function that takes an array as an argument
   -check the value  of each element zero or nonzero
      -use forloop
      if zero 
        -push to next
        else
          -intact it
    return the new array      
 */
function zeroShiter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i + 1] !== 0) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    } else if (arr[i] !== 0 || (arr[i] == arr[i + 1]) === 0) {
      return arr;
    }
  }
  return arr;
}
// console.log(zeroShiter([0, 0, 2, 0, 5]));
  

