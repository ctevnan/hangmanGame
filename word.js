//import the letter.js file by using require, set it to a variable named letter
var Letter = require("./Letter.js");
//create a constructor function named Word
//the constructor function named word should take an argument wrd
//create a property called word which will store the argument wrd
//create a property called lets which is set to an empty array ( "," )
//create a property called found which is set to false (boolean)
//create a function inside of Word constructor called getLets
//it will run a loop that iterate over each of the letters in the word property
//everytime the loop iterates, it creates a new Letter object with the argument being the current letter
// Hint: this function will create Letter objects that will be put into the lets array
//After this function runs, the property lets will contain Letter objects for each of the letter in word
function Word(wrd){
  this.word = word;
  this.lets = [];
  this.found = false;
  function getLets() { 
    for (var i = 0; i < this.word.length; i++) {
      var wordLetter =this.word[i];
      console.log(wordLetter);
      var wordLetterObject = new letter(wordLetter);
      console.log(wordLetterObject);
      this.lets.push(wordLetterObject); 
  }
  console.log(this.lets); //print array of word letter
}

//create a function inside of Word constructor called checkIfLetterFound

//this function will take an argument guessLetter
//create a variable called whatToReturn and set it to the number 0
//it will run a loop that will iterate over each object in the lets array
//check the current object that’s being iterated over
//if the charac property in that object is equal to guessLetter, set the appear property of that object to true
//add 1 to checkIfLetterFound
//return checkIfLetterFound
//Hint: the objects in lets array are created with the Letter constructor, with all the property created in Letter constructor

this.checkIfLetterFound = function(guessLetter){
  var whatToReturn = 0;
} 
if (charac == guessLetter) {
    this.appear === true;
 





