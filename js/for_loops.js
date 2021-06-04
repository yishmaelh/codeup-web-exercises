

/*function showMultiplicationTable(x) {
    for (let i = 0; i < 10; i++)
        console.log(x + " x " + i + " = " + (x * i))
}

showMultiplicationTable(8)
*/

/*for (let x =10; x<=200; x++) {
       let number = Math.ceil(Math.random() * 100) + 10;
    if (number === 0) {
        console.log(x +  " is even");
    }
    else if (number % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(number + " is odd");
    }
}
 */


for(let i = 1; i < 10; i++ ) {
    let s = ''.repeat( 10 - i )+ ( i + '' ).repeat(i);
    console.log(s);
}





/*for (let i = 100; i >= 5; i = i - 5 ) {
    console.log(i);
}
 */