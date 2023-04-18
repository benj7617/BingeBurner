let signIN = () => {
    document.getElementById("signin").style = "";
    document.getElementById("loginmenu").style = "display:none";
    document.getElementById("signup").style = "display:none";
}
let signUP = () => {
    document.getElementById("signup").style = "";
    document.getElementById("loginmenu").style = "display:none";
    document.getElementById("signin").style = "display:none";
}

let createUser = () => {
    let userName1 = document.getElementById("userName").value;
    let Email = document.getElementById("e-mail").value;
    let password = document.getElementById("password").value;

    // Verficering variabler
    let SpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let userNameCheck;
    let passwordWork;
    let emailCheck;

    // Verficerings if-statemenets
    if(userName1 == ""){
        userNameCheck = false;
    }
    else{
        userNameCheck = true;
    }

    if (SpecialChar.test(password)) {
        passwordWork = true;
    }
    else {
        passwordWork = false;
        alert("please include a special character in your password")
    }

    if (Email.includes("@")) {
        emailCheck = true;
    }
    else {
        emailCheck = false;
        alert("please enter an email")
    }

    if (passwordWork == true && emailCheck == true && userNameCheck == true) {
        localStorage.setItem("UserName", JSON.stringify(userName1));
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("points", JSON.stringify(0));
        alert("User created! please login with your newly created user");
    }
}

function signInVerify() {
    userNameLogin = document.getElementById("userNameLogIn").value;
    passwordLogin = document.getElementById("passwordLogIn").value;

    console.log(userNameLogin);
    console.log(passwordLogin);

    if(JSON.stringify(userNameLogin) == localStorage.getItem("UserName") && JSON.stringify(passwordLogin) == localStorage.getItem("password")){
        window.location.href = "Home.html";
    }
    else{
        alert("wrong input, please try again or sign up")
    }
}