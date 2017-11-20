var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Tomek";
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive();

var myCar2 = {

    maxSpeed: 50,
    driver: "Magda",
    drive: function(speed, time){
        return(speed * time);
    }
};

console.log(myCar.maxSpeed);
var travel = myCar2.drive(50, 3);
console.log(travel);
console.log("distance travel was " + travel);