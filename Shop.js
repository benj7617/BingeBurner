let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
})();

let checkPoints = (price) => {
    if(confirm("Do you want to buy this option?") == true){
        let balance = JSON.parse(localStorage.getItem("points"));
        balance = parseInt(balance) - price;
        if(balance > 0){
            localStorage.setItem("points", balance);
            alert("30 min of Netflix bought for " + price);
            location.reload();
            // nu skal du videresendes - er det muligt at lave en ny fane hvor netflix.com åbner?
        }
        else{
            alert("not suffient balance")
        }
    }
}