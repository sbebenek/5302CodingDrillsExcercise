function jOneSubmit() {
    let small = document.getElementById("small");
    let medium = document.getElementById("medium");
    let large = document.getElementById("large");
    let jOneResults = document.getElementById("jOneResults");

    if (isNaN(small.value) || isNaN(medium.value) || isNaN(large.value)) {
        jOneResults.innerHTML = "<span style=\"color: red;\">All fields must be a number</span>";
    }
    if ((1 * small.value + 2 * medium.value + 3 * large.value) < 10) {
        jOneResults.innerHTML = "sad :(";
    }
    else {
        jOneResults.innerHTML = "happy :)";
    }

    return false;
}

function jTwoSubmit() {
    let p = parseInt(document.getElementById("p").value);
    let n = parseInt(document.getElementById("n").value);
    let r = parseInt(document.getElementById("r").value);
    let jTwoResults = document.getElementById("jTwoResults");

    let infectedList = [n];
    let dayCounter = 0;
    let totalInfected = n;

    console.log(infectedList);
    console.log("p, total people = " + p);
    console.log("total infected = " + totalInfected);
    while (parseInt(totalInfected) <= parseInt(p)) {
        infectedList.push(infectedList[infectedList.length - 1] * r);
        dayCounter++;
        totalInfected = totalInfected + infectedList[infectedList.length - 1];
        console.log("a day has gone by. Total people = " + p + ", total infected: " + totalInfected);
    }

    console.log(dayCounter);

    jTwoResults.innerHTML = dayCounter;

    return false;
}


//NOTE: j3 is no longer in a <form> element, however all j3 functions are still applicable
/**
 * Resets the j3 form when the "reset" button is clicked
 */
function resetFormThree() {
    document.getElementById("formThree").innerHTML = "<p>Number of points: </p><div><input type=\"number\" name=\"numberOfPoints\" id=\"numberOfPoints\" /></div><button onclick=\"submitPointsFormThree();\">Submit</button>";
    document.getElementById("jThreeResults").innerHTML = "";
}

/**
 * Generates the correct amount of inputs inside the j3 form based on the submitted number of fields
 */
function submitPointsFormThree() {
    var numberOfPoints = parseInt(document.getElementById("numberOfPoints").value);
    var formThreeDOM = document.getElementById("formThree");
    console.log("Number of points: " + numberOfPoints);

    formThreeDOM.innerHTML = "<p>Coordinates (x,y without brackets):";
    for (var i = 0; i < numberOfPoints; i++) {
        formThreeDOM.innerHTML += "<input type=\"text\" class=\"formThreeField\" /><br />";
    }
    formThreeDOM.innerHTML += "<button onclick=\"jThreeSubmit();\">Submit</button>";
}

function jThreeSubmit() {
    var formPointsArray = document.querySelectorAll("#formThree > input"); //the array of all input objects in form 3
    var coordinatesArray = []; //the array of all coorindate values
    var xCoordinateArray = []; //the array of all x coordinate values
    var yCoordinateArray = []; //the array of all y coordinate values

    formPointsArray.forEach(element => {
        coordinatesArray.push(element.value);
    });
    console.log(coordinatesArray);

    coordinatesArray.forEach(element => {
        var split = element.split(',');
        xCoordinateArray.push(split[0]);
        yCoordinateArray.push(split[1]);
    });
    console.log("X coordinates: " + xCoordinateArray);
    console.log("Y coordinates: " + yCoordinateArray);

    //bottom left corner will be (smallest x coord - 1, smallest y coord - 1)
    //top right corner will be (biggest x coord + 1, biggest y coord + 1)
    var maxXCoordinate = Math.max.apply(Math, xCoordinateArray);
    var maxYCoordinate = Math.max.apply(Math, yCoordinateArray);
    var minXCoordinate = Math.min.apply(Math, xCoordinateArray);
    var minYCoordinate = Math.min.apply(Math, yCoordinateArray);
    console.log("X coordinates - Max: " + maxXCoordinate + ", Min: " + minXCoordinate);
    console.log("Y coordinates - Max: " + maxYCoordinate + ", Min: " + minYCoordinate);

    var results = document.getElementById("jThreeResults");
    results.innerHTML = (minXCoordinate-1)+","+(minYCoordinate-1)+"<br />"+(maxXCoordinate+1)+","+(maxYCoordinate+1);



    return false;
}