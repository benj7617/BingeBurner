let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
})();

let addPoints = (sum) =>{
    if(confirm("Du vil betale " + sum + " point! Er du sikker?") == true){
        alert(sum + " point fjernet fra din konto! Du har nu adgang til den valgte undeerholdning");
        points = parseInt(localStorage.getItem("points"));
        point = points + parseInt(sum);
        localStorage.setItem("points", JSON.stringify(point));
        location.reload();
    }
}