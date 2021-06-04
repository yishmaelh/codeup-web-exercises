
 var random = prompt("Enter an odd number between 1 and 50 ")

    Math.floor( (Math.random() * 50));

console.log("The random odd number skipped is: " + random);

for ( let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        continue;
    }

    if (random == i) {
        prompt("Oh no! Skipping number: " + i);
    } else {
        console.log("This is an odd number: " + i);
    }

    if(i > 50)
        break;
}