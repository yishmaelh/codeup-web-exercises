// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
// TODO: Add validation to function above, if the argument pass is not a string it should return false.

function countSpaces(string){
    if (typeof string != "string"){
        return false
    }
    return (string.split(" ").length - 1)
}


