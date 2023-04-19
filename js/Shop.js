let getPoints = (function () {
    document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " point";
})();

// I dette eksempel bliver brugeren sendt videre til den pågældende hjemmeside. Vi har valgt at vise
// Hvordan det ville se ud hvis man havde købt 10 sekunder.
// Hjemmesiden lukker nemlig efter 10 sekunder.
function sendToPage(page) {
    let NetflixWindow = window.open(String(page), "_blank");
    let timer = 10000; 
    setTimeout(function () {
        NetflixWindow.close()
    }, timer);
    console.log("page closed after " + timer + " miliseconds");
}

let calcWatchTime = (time) => {
    let currentWatchTime = parseInt(JSON.parse(localStorage.getItem("watchTime")));
    WatchTime = currentWatchTime + parseInt(time);
    localStorage.setItem("watchTime", JSON.stringify(WatchTime));
}


let checkPoints = (price, page) => {
    if (confirm("Er du sikker på at du gerne vil købe denne mulighed?") == true) {
        let balance = JSON.parse(localStorage.getItem("points"));
        balance = parseInt(balance) - price;
        let pageName = "";

        if(page == "netflix"){
            page = "https://netflix.com";
            pageName = "Netflix";
        }
        else if(page == "viaplay"){
            page = "https://viaplay.dk/";
            pageName = "Viaplay";
        }
        else if(page == "HBO"){
            page = "https://www.hbomax.com/";
            pageName = "HBO";
        }
        
        if (balance >= 0) {
            localStorage.setItem("points", balance);
            alert("45 min af " + pageName + " købt for " + price + ". Din tid starter nu!");
            calcWatchTime(45);
            sendToPage(String(page));  
            document.getElementById("userPoints").innerHTML = localStorage.getItem("points") + " points";
        }
        else {
            alert("not suffient funds")
        }
    }
}