let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
})();

let pointModel = (distance, time, k) => {
    let sum = Math.round(((distance * 1000) / time * k));
    return sum;
}

let calorieModel = (activity, distance) => {
    let caloriesPrKm;

    if (activity == "walk") {
        caloriesPrKm = 50;
    }
    else if (activity == "run") {
        caloriesPrKm = 60;
    }
    else if (activity == "cycle") {
        caloriesPrKm = 20;
    }

    sum = caloriesPrKm * distance;
    let calories = parseInt(sum) + parseInt(JSON.parse(localStorage.getItem("calories")));

    localStorage.setItem("calories", JSON.stringify(calories));
}

let addPoints = (sum) => {
    if (confirm("You will recieve " + sum + " points! Are you finished with your workout?") == true) {
        alert(sum + " points added to your acount");
        points = parseInt(localStorage.getItem("points"));
        point = points + parseInt(sum);
        localStorage.setItem("points", JSON.stringify(point));
        location.reload();
    }
}

function CalcPointsWalk() {
    let distance = document.getElementById("walk-km").value;
    let time = document.getElementById("walk-tid").value;
    let k = 1.25;

    try{
        if (isNaN(distance) || isNaN(time)) throw "Input is not a number";
        if (time == 0 || distance == 0) throw "Input is not possible";
        if (time < 0 || distance < 0) throw "Negative input not possible";

        let sum = pointModel(distance, time, k);
        addPoints(sum);
        calorieModel("walk", distance);
    }
    catch (error) {
        alert(error);
    }
}

function CalcPointsRun() {
    let distance = document.getElementById("run-km").value;
    let time = document.getElementById("run-tid").value;
    let k = 2;

    try{
        if (isNaN(distance) || isNaN(time)) throw "Input is not a number";
        if (time == 0 || distance == 0) throw "Input is not possible";
        if (time < 0 || distance < 0) throw "Negative input not possible";

        let sum = pointModel(distance, time, k);
        addPoints(sum);
        calorieModel("run", distance);
    }
    catch (error) {
        alert(error);
    }
}

function CalcPointsCycle() {
    let distance = document.getElementById("cykel-km").value;
    let time = document.getElementById("cykel-tid").value;
    let k = 0.75;

    try{
        if (isNaN(distance) || isNaN(time)) throw "Input is not a number";
        if (time == 0 || distance == 0) throw "Input is not possible";
        if (time < 0 || distance < 0) throw "Negative input not possible";

        let sum = pointModel(distance, time, k);
        addPoints(sum);
        calorieModel("cycle", distance);
    }
    catch (error) {
        alert(error);
    }
}