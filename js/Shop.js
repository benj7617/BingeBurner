let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
})();

function sendToNetflix(){
    let NetflixWindow = window.open("https://www.netflix.com/", "_blank");
    setTimeout(function() {
        NetflixWindow.close()
        alert("Page will close in 5 sec")
    }, 5000);
}

let checkPoints = (price) => {
    if(confirm("Do you want to buy this option?") == true){
        let balance = JSON.parse(localStorage.getItem("points"));
        balance = parseInt(balance) - price;
        if(balance > 0){
            localStorage.setItem("points", balance);
            alert("30 min of Netflix bought for " + price);
            location.reload();
            sendToNetflix();
        }
        else{
            alert("not suffient balance")
        }
    }
}