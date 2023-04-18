let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
})();

let pointModel = (distance, time, k) => {
    let sum = Math.round(((distance * 1000)/time * k));
    return sum;
}

let calorieModel = () => {

}

let addPoints = (sum) =>{
    if(confirm("You will recieve " + sum + " points! Are you finished with your workout?") == true){
        alert(sum + " points added to your acount");
        points = parseInt(localStorage.getItem("points"));
        point = points + parseInt(sum);
        localStorage.setItem("points", JSON.stringify(point));
        location.reload();
    }
}

function CalcPointsWalk(){
    let distance = document.getElementById("walk-km").value;
    let time = document.getElementById("walk-tid").value;
    let k = 1;

    let sum = pointModel(distance, time, k);
    addPoints(sum);
}

function CalcPointsRun(){
    let distance = document.getElementById("run-km").value;
    let time = document.getElementById("run-tid").value;
    let k = 2;

    let sum = pointModel(distance, time, k);
    addPoints(sum);
}

function CalcPointsCycle(){
    let distance = document.getElementById("cykel-km").value;
    let time = document.getElementById("cykel-tid").value;
    let k = 1.5;

    let sum = pointModel(distance, time, k);
    addPoints(sum);
}