let getPoints = (function () {
    document.getElementById("points").innerHTML = localStorage.getItem("points");
})();

let getUserName = (function () {
    document.getElementById("userName").innerHTML = JSON.parse(localStorage.getItem("UserName"));
})();

