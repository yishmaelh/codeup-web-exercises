(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     *
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     *
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     *
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     *
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();

let names = ['Yish', 'Blaze', 'Lurati', 'Viz'];

// console.log("Display the number of elements in the array.");
// console.log(names.length);
//
// console.log("List the first name in the array");
// console.log(names[0]);
//
// console.log("List the second name in the array");
// console.log(names[1]);
//
// console.log("List the third name in the array");
// console.log(names[2]);
//
// console.log("List the last name in the array");
// console.log(names[3]);



for (var index = 0; index < names.length; index++); {
    console.log("The name at index " + index + " is " + names[index]);
}

names.forEach(function(name) {
    console.log("Here are the names in the array : " + name + ".")
});


function first(){
    return names[0]
}

console.log(first())

function second(){
    return names[1]
}

console.log(second())

function last(){
    return names[3]
}

console.log(last(names[3]))

