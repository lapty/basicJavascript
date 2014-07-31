//STRING---
"Herro"

var firstName = "Charles"
console.log('string: ',firstName); //console prints name

var array2=["hair","black","has","Lap"];
var makeSentence = array2.reverse(0,1,2,3) && array2.join(" ");
console.log('string: ',makeSentence); //console reverses array order, joins with space, prints name

//BOOLEAN---
1231236 > 3 //will produce true

514123 < 5 //will produce false

"shortsentence".length === "prettymuchalongersentence".length //will produce false

//INTEGER---

123123141 //example of random integer

"Whatever".length //produce length of string

var numberThree=3
console.log(numberThree) //will produce integer 3



//OBJECTS---
var Charles = {
  name: 'Charles',
  height: 67,
  climb: function() {
    console.log("Charles' info");
  },

var Liz = {
  name: 'Liz',
  skills: 'none',
  lamb: function() {
    console.log("This is Liz");
  }
}

//it's true
var Will = {
  name: 'Will',
  smells: 'like shit',
  lamb: function() {
    console.log("This is Will");
  }
}

//FUNCTIONS---

//basic mathematical functions
var sum = function(x,y) {
  return x+y;
}

var difference = function(x,y) {
  return x-y;
}

var multiplyme = function(x,y) {
  return x*y;
}


//ARRAYS---

array1=["Random", 4, "assortment", 5, "of", "strings", "and", 6, "integers"]
console.log(array1)

countries=["Vietnam", "Spain", "United States", "Japan"]
countries[3]="Mexico" //changes third array spot to Mexico
countries.unshift("Ireland") //adds Ireland to the beginning of Array
