
// TODO :1.Create a function called removeDuplicates that accepts an array of strings and returns the array with all duplicate elements filtered out.

var arr = [ "Gundam", "Mazinger", "Getter 1", "Mazinkaiser", "Getter 1", "Gundam"];


function removeDuplicates(){
    return [...new Set(arr)];
}

console.log(removeDuplicates());

// TODO: Create a function called max that accepts an array of numbers and returns the largest number from that array.



function max(numbersArray){
    return Math.max(...numbersArray)
}

console.log(max())

// TODO: Create a function called mostOccurringNumber that accepts an array of numbers and returns the number that occurs the most within that array.

