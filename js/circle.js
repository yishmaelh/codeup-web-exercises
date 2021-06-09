(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,
        pi: Math.PI,


        getArea: function getArea(radius) {
            //
            // hint: area = pi * radius^2


            return((Math.PI)*(Math.pow(radius,2)))//
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.pi * (Math.pow(this.radius,2))))
            } else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.pi * (Math.pow(this.radius,2)))
            }

        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number is:" +  Math.round(circle.pi * (Math.pow(circle.radius,2))))
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number is:" + Math.round(circle.pi * (Math.pow(circle.radius,2))));
    circle.logInfo(true);
})();
