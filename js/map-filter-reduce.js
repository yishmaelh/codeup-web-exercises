const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercises

//    TODO: 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeOrMoreLanguages = users.filter(element => element.languages.length > 2);

console.log(threeOrMoreLanguages);

//  TODO:   2. Use .map to create an array of strings where each element is a user's email address

let emailAddress = users.map(element => element.email);

console.log(emailAddress);

// TODO: 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let tenure = users.reduce((total, currentUser) => {
    return total + currentUser.yearsOfExperience;
}, 0);

console.log(tenure);

//    TODO: 4. Use .reduce to get the longest email from the list of users.



//    TODO: 5.Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.