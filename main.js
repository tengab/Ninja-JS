function getAverage (a,b){

    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var myResult = getAverage(7,11);
console.log("the average is " + myResult);

function logResult(){

    console.log("the average is " + myResult);

}

logResult();