let user = JSON.parse(localStorage.getItem("UserName"));

document.getElementById("BrugerNavnInput").value = user;

let email = JSON.parse(localStorage.getItem("Email"));
document.getElementById("EmailInput").value = email;

let password = JSON.parse(localStorage.getItem("password"));
document.getElementById("PasswordInput").value = password;

function bekræftÆndring(){
    
}