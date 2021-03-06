// add solution here

//Create a function `theBeatlesPlay`, which accepts two parameters--an array of
//musicians and an array of instruments.
//* Create a variable with an empty array.
//* Use a `for loop`, which iterates over the array of musicians. Be careful
//  about what value you set your `counter` variable to store. (Hint: Think
//  about what the first index of an array is).
//* The first time through the loop, it should create a string using the _first_
//  index of the musicians array **and** the first index of the instruments
//  array: `"John Lennon plays guitar"`.
//* Add this string to the empty array you created. The loop should make the
//  same sentence for every member of the musicians array.
//* The function should return the array of new strings containing what
//  instruments each musician plays.

function theBeatlesPlay(musicians, instruments){

  var musiciansInstruments = [];

  for(var i = 0; i < musicians.length; i++){
    var str = `${musicians[i]} plays ${instruments[i]}`;
    musiciansInstruments.push(str);
  };

  return musiciansInstruments;
};

//Create a function `johnLennonFacts`.
//This function will accept one argument, an array of facts about John
//    Lennon (note that it might not be exactly the following facts):
//    ```js
//    const facts = [
//      "He was the last Beatle to learn to drive",
//      "He was never a vegetarian",
//      "He was a choir boy and boy scout",
//      "He hated the sound of his own voice"
//    ];
//    ```
//    * Use a while loop to loop over the facts array and add `"!!!"` to the end of
//    every fact.
//    * Return an array of strings with exclamation points.

function johnLennonFacts(facts){
  var i = 0;
  var alteredFacts = [];

  while(i < facts.length){
    var str = `${facts[i]}!!!`;
    alteredFacts.push(str);
    i++;
  };

  return alteredFacts;
};

//Create a function `iLoveTheBeatles` which accepts a number as a parameter.
//    * The function should create a variable that stores an empty array.
//    * Implement a do-while loop inside the function that adds `"I love the
//      Beatles!"` to the empty array.
//    * The loop should then increment the number passed in as a parameter. The
//      condition of the loop should check to see that the parameter number is
//      less than `15`. It should contain a number of strings that represents the
//      difference between the input number and `15`.
//    * Return the array with the strings `"I love the Beatles!"`.

function iLoveTheBeatles(num){
  var array = [];

  do{
    array.push(`I love the Beatles!`);
    num++;
  } while(num < 15);

  return array;
};
