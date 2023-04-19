let user = JSON.parse(localStorage.getItem("UserName"));

document.getElementById("BrugerNavnInput").value = user;

let email = JSON.parse(localStorage.getItem("Email"));
document.getElementById("EmailInput").value = email;

let password = JSON.parse(localStorage.getItem("password"));
document.getElementById("PasswordInput").value = password;

function show() {
    let p = document.getElementById('PasswordInput');
    p.setAttribute('type', 'text');
    document.getElementById("passwordButton").innerHTML = "Skjul password";
}

function hide() {
    let p = document.getElementById('PasswordInput');
    p.setAttribute('type', 'password');
    p.innerHTML = "vis password"
    document.getElementById("passwordButton").innerHTML = "Vis password";
}

let pwShown = 0;

document.getElementById("passwordButton").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function confirmChange() {
    let newUserName = document.getElementById("BrugerNavnInput").value;
    let newEmailName = document.getElementById("EmailInput").value;
    let newPassword = document.getElementById("PasswordInput").value;

    let SpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let userNameCheck;
    let passwordWork;
    let emailCheck;

    if (newUserName == "") {
        userNameCheck = false;
    }
    else {
        userNameCheck = true;
    }

    if (SpecialChar.test(newPassword)) {
        passwordWork = true;
    }
    else {
        passwordWork = false;
        alert("Brug venligst mindst et speical tegn i dit password")
    }

    if (newEmailName.includes("@")) {
        emailCheck = true;
    }
    else {
        emailCheck = false;
        alert("Skriv venligst en email")
    }

    if (passwordWork == true && emailCheck == true && userNameCheck == true) {
        localStorage.setItem("UserName", JSON.stringify(newUserName));
        localStorage.setItem("Email", JSON.stringify(newEmailName));
        localStorage.setItem("password", JSON.stringify(newPassword));
        alert("Dine informationer er nu opdateret!");
        location.reload();
    }
}

let logOut = () => {
    window.location.href="loginSystem.html"
}