let fName = document.getElementsByClassName("first-name")[0];
let sName = document.getElementsByClassName("sur-name")[0];
let emailBtn = document.getElementsByClassName("login-email")[0];
let pswdLoginBtn = document.getElementsByClassName("login-pswd")[0];
let submtBtn = document.getElementById("submit-btn");



submtBtn.addEventListener("click", function (c) {

    c.preventDefault();
    let emailLogin = document.getElementsByClassName("login-email")[0].value;
    let pswdLogin = document.getElementsByClassName("login-pswd")[0].value;
    let pswdR = pswdLogin;
    let emailR = emailLogin;
     alert("Register Successfully"); 
	   
       
     
	 localStorage.setItem("pswdR", pswdR);
     localStorage.setItem("emailR", emailR);
	   location.href = "./fab-login/index.html";
});