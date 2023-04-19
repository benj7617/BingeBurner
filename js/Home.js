let getPoints = (function () {
    document.getElementById("points").innerHTML = JSON.parse(localStorage.getItem("points"));
})();

let getUserName = (function () {
    document.getElementById("userName").innerHTML = JSON.parse(localStorage.getItem("UserName"));
})();

let getCalories = (function () {
    document.getElementById("kcal").innerHTML = JSON.parse(localStorage.getItem("calories")) + " kcal";
})();

let getWatchTime = (function () {
    document.getElementById("watchTime").innerHTML = JSON.parse(localStorage.getItem("watchTime")) + " min";
})();

let getMotionTime = (function () {
    document.getElementById("motionTime").innerHTML = JSON.parse(localStorage.getItem("motionTime")) + " min";
})();