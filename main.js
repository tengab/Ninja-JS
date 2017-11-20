var myCar2 = {

    maxSpeed: 50,
    driver: "Magda",
    drive: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

myCar2.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
