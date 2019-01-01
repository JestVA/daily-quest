// Use the Rest Operator with Function Parameters
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
(function() {
  "use strict";
  arr2 = []; // change this line LOL D: 
})();
console.log(arr2);
// Use Destructuring Assignment to Assign Variables from Objects
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {tomorrow: tempOfTomorrow} = avgTemperatures; // this line was very tricky, I was not destructuring 
    // what should have been destructured, the parameter passed in the getTempOfTmrw function. 
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
 // Prefer the use of spread operator to call variadic functions
const x = [1, 2, 3, 4, 5];
console.log(...x);

// Use Destructuring Assignment to Assign Variables from Nested Objects

// Use Destructuring Assignment to Assign Variables from Arrays

// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// Create Strings using Template Literals

// Write Concise Object Literal Declarations Using Simple Fields

// Write Concise Declarative Functions with ES6

// Use class Syntax to Define a Constructor Function

// Use getters and setters to Control Access to an Object

// Understand the Differences Between import and require

// Use export to Reuse a Code Block

// Use * to Import Everything from a File

// Create an Export Fallback with export default
// Import a Default Export
// Regular Expressions
// Introduction to the Regular Expression Challenges
// Using the Test Method
// Match Literal Strings
// Match a Literal String with Different Possibilities
// Ignore Case While Matching
// Extract Matches
// Find More Than the First Match
// Match Anything with Wildcard Period
// Match Single Character with Multiple Possibilities
// Match Letters of the Alphabet
// Match Numbers and Letters of the Alphabet
// Match Single Characters Not Specified
// Match Characters that Occur One or More Times
// Match Characters that Occur Zero or More Times
// Find Characters with Lazy Matching
// Find One or More Criminals in a Hunt
// Match Beginning String Patterns
// Match Ending String Patterns
// Match All Letters and Numbers
// Match Everything But Letters and Numbers
// Match All Numbers
// Match All Non-Numbers
// Restrict Possible Usernames
// Match Whitespace
// Match Non-Whitespace Characters
// Specify Upper and Lower Number of Matches
// Specify Only the Lower Number of Matches
// Specify Exact Number of Matches
// Check for All or None
// Positive and Negative Lookahead
// Reuse Patterns Using Capture Groups
// Use Capture Groups to Search and Replace
// Remove Whitespace from Start and End
// Debugging
// Introduction to the Debugging Challenges
// Use the JavaScript Console to Check the Value of a Variable
// Understanding the Differences between the freeCodeCamp and Browser Console
// Use typeof to Check the Type of a Variable
// Catch Misspelled Variable and Function Names
// Catch Unclosed Parentheses, Brackets, Braces and Quotes
// Catch Mixed Usage of Single and Double Quotes
// Catch Use of Assignment Operator Instead of Equality Operator
// Catch Missing Open and Closing Parenthesis After a Function Call
// Catch Arguments Passed in the Wrong Order When Calling a Function
// Catch Off By One Errors When Using Indexing
// Use Caution When Reinitializing Variables Inside a Loop
// Prevent Infinite Loops with a Valid Terminal Condition
// Basic Data Structures
// Introduction to the Basic Data Structure Challenges
// Use an Array to Store a Collection of Data
// Access an Array's Contents Using Bracket Notation
// Add Items to an Array with push() and unshift()
// Remove Items from an Array with pop() and shift()
// Remove Items Using splice()
// Add Items Using splice()
// Copy Array Items Using slice()
// Copy an Array with the Spread Operator
// Combine Arrays with the Spread Operator
// Check For The Presence of an Element With indexOf()
// Iterate Through All an Array's Items Using For Loops
// Create complex multi-dimensional arrays
// Add Key-Value Pairs to JavaScript Objects
// Modify an Object Nested Within an Object
// Access Property Names with Bracket Notation
// Use the delete Keyword to Remove Object Properties
// Check if an Object has a Property
//  Iterate Through the Keys of an Object with a for...in Statement
// Generate an Array of All Object Keys with Object.keys()
// Modify an Array Stored in an Object
// Basic Algorithm Scripting
// Introduction to Basic Algorithm Scripting
// Convert Celsius to Fahrenheit
// Reverse a String
// Factorialize a Number
// Find the Longest Word in a String
// Return Largest Numbers in Arrays
// Confirm the Ending
// Repeat a String Repeat a String
// Truncate a String
// Finders Keepers
// Boo who
// Title Case a Sentence
// Slice and Splice
// Falsy Bouncer
// Where do I Belong
// Mutations
// Chunky Monkey
// Object Oriented Programming
// Introduction to the Object Oriented Programming Challenges
// Create a Basic JavaScript Object
// Use Dot Notation to Access the Properties of an Object
// Create a Method on an Object
// Make Code More Reusable with the this Keyword
// Define a Constructor Function
// Use a Constructor to Create Objects
// Extend Constructors to Receive Arguments
// Verify an Object's Constructor with instanceof
// Understand Own Properties
// Use Prototype Properties to Reduce Duplicate Code
// Iterate Over All Properties
// Understand the Constructor Property
// Change the Prototype to a New Object
// Remember to Set the Constructor Property when Changing the Prototype
// Understand Where an Object’s Prototype Comes From
// Understand the Prototype Chain
// Use Inheritance So You Don't Repeat Yourself
// Inherit Behaviors from a Supertype
// Set the Child's Prototype to an Instance of the Parent
// Reset an Inherited Constructor Property
// Add Methods After Inheritance
// Override Inherited Methods
// Use a Mixin to Add Common Behavior Between Unrelated Objects
// Use Closure to Protect Properties Within an Object from Being Modified Externally
// Understand the Immediately Invoked Function Expression (IIFE)
// Use an IIFE to Create a Module
// Functional Programming
// Introduction to the Functional Programming Challenges
// Learn About Functional Programming
// Understand Functional Programming Terminology
// Understand the Hazards of Using Imperative Code
// Avoid Mutations and Side Effects Using Functional Programming
// Pass Arguments to Avoid External Dependence in a Function
// Refactor Global Variables Out of Functions
// Use the map Method to Extract Data from an Array
// Implement map on a Prototype
// Use the filter Method to Extract Data from an Array
// Implement the filter Method on a Prototype
// Return Part of an Array Using the slice Method
// Remove Elements from an Array Using slice Instead of splice
// Combine Two Arrays Using the concat Method
// Add Elements to the End of an Array Using concat Instead of push
// Use the reduce Method to Analyze Data
// Sort an Array Alphabetically using the sort Method
// Return a Sorted Array Without Changing the Original Array
// Split a String into an Array Using the split Method
// Combine an Array into a String Using the join Method
// Apply Functional Programming to Convert Strings to URL Slugs
// Use the every Method to Check that Every Element in an Array Meets a Criteria
// Use the some Method to Check that Any Elements in an Array Meet a Criteria
// Introduction to Currying and Partial Application
