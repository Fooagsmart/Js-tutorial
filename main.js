let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;

//The + operator concatenates (adds) strings.
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
document.getElementById("dem").innerHTML = text3;

//<p>Strings are written with quotes. You can use single or double quotes:</p>
let carName1 = "Volvo xc60";
let carName2 = 'Volvo xc60';
document.getElementById("den").innerHTML = carName1 + "<br>" + carName2;

//<p>Numbers can be written with, or without decimals:</p>
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;
document.getElementById("o").innerHTML = x1  + "<br>" + x2 + "<br>" + x3;

//<p>Extra large or extra small numbers can be written with scientific (exponential) notation:</p>
let y = 123e5;
let z = 123e-5;
document.getElementById('y').innerHTML = y + "<br>" + z;

//<p>Array indexes are zero-based, which means the first item is [0].</p>
const cars = ["Saab","Volvo","BMW"];

document.getElementById("D").innerHTML = cars[1];

//<h2>JavaScript Objects</h2>
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
};

//JavaScript Objects
document.getElementById("fe").innerHTML = person.firstName + "is" + person.age + "years old.";

//<p>An empty string has both a legal value and a type:</p>
let car = "";
document.getElementById("hmm").innerHTML = "THE VALUE IS: " + car + "<br>" + "THE TYPE IS: " + typeof car; 

function myFunction(p1, p2) {
    return p1 * p2;
}
let result = myFunction(4, 3); 
document.getElementById("fun").innerHTML = result;

    let m = myFunction(4, 3);
document.getElementById("one").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

function toCelsius(f){
    return (5/9) * (f-32);
}

//let value = toCelsius(77);
//document.getElementById("fah").innerHTML = value;

function toCelsius(f){
    return (5/9) * (f-32)
}
//let value = toCelsius();
//document.getElementById("to").innerHTML = value;

//let text = "The temperature is " + toCelsius(77) + "Celsius."; 
document.getElementById("var").innerHTML = text;
function toCelsius(f){
    return (5/9) * (f-32)
} 
let text = "Outside: " + typeof carName1;
document.getElementById("demo1").innerHTML = text;

function myFunction() {
  let carName1 = "Volvo";
  let text = "Inside: " + typeof carName1 + " " + carName1; 
  document.getElementById("demo2").innerHTML = text;
}

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';


myFunction();
