// TODO :1.Create a function called removeDuplicates that accepts an array of strings and returns the array with all duplicate elements filtered out.

var arr = ["Gundam", "Mazinger", "Getter 1", "Mazinkaiser", "Getter 1", "Gundam"];


function removeDuplicates() {
    return [...new Set(arr)];
}

console.log(removeDuplicates());

// TODO: Create a function called max that accepts an array of numbers and returns the largest number from that array.


function max(numbersArray) {
    return Math.max(...numbersArray);
}

console.log(max())

// TODO: Create a function called mostOccurringNumber that accepts an array of numbers and returns the number that occurs the most within that array.

function mostOccurringNumber(numbers) {

    var count = [];
    for (let i = 0; i < numbers.length; i++) {
        var someNumbers = numbers[i];
        if (count[someNumbers] === undefined) {
            count[someNumbers] = 1;
        } else {
            count[someNumbers]++;
        }
    }
}

mostOccurringNumber([8, 93, 28, 8, 27, -62, 32, 8, -62]);


var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]


function whoIsPassing(students){


    var passingResults = [];


    for (let i = 0; i < students.length; i++) {

        var currentStudentsName = students[i].name


        var isCurrentStudentPassing = (students[i].classAverage >= 60);

        passingResults.push(
            {
                name: currentStudentsName,
                passing: isCurrentStudentPassing
            }
        )
    }

    return passingResults;
}

console.log(whoIsPassing());

