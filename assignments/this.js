/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - Refers to the default which encompasses the entire window.

* 2. Implicit binding - Uses dot notation to tie this to object literals, must be defined inside the scope of of the object to work.

* 3. New Binding - Uses the word new to create a new object which can be tied together with similar object.

* 4. Explicit Binding - uses the dot notation with methods such as call, apply, or bind which can be put outside the scope. 
*
* write out a code example of each explanation above
*/

// Principle 1


// code example for Window Binding
function name(){
    console.log(this);
    }
    name();

    // Principle 2

// code example for Implicit Binding
const bears={
    name:"Chicago Bears",
    points:"Field Goals",
    result:"lose games",
    score: 1,
    game:function(){
        return `The ${this.name} like to miss ${this.points} and ${this.result} by ${this.score} point.`;
    }
}
console.log(bears.game());

// Principle 3

// code example for New Binding
function Me(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.speak=function(){
        return `I'm ${this.name} from ${this.location}`
    }
}
const Tyler= new Me ({
    name:"Tyler",
    location:"Charlotte, North Carolina"
})
console.log(Tyler.speak());
// Principle 4

// code example for Explicit Binding

const person ={
    name:"Tyler"
}
function greeting(name){
    return `Hello! my name is ${this.name}.`;
}
console.log(greeting.call(person));