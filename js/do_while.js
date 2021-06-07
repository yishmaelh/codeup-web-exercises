"use strict"


let allCones = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("Today, I can sell " +  allCones + " cones");


let coneInventory = 0;

do {
    let soldCones = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        console.log("The customer asked for " + soldCones + " cones");

    if ((coneInventory + soldCones) > allCones) {
        console.log("I cannot sell " + soldCones + " cones");
        continue;
    }
    console.log("The customer bought " + soldCones + " cones");
    coneInventory = coneInventory + soldCones;
    console.log("I have sold  " + coneInventory + " cones");


} while (coneInventory < allCones);

    console.log("I have sold all my cones. I can go home")




