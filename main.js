var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

};


var myCar = new Car(70, "Bartek");
var myCar2 = new Car(70, "Pawel");
var myCar3 = new Car(70, "Olek");
var myCar4 = new Car(70, "Keler");

myCar.drive(30,5);
myCar3.logDriver();