let loginBtn = document.getElementsByClassName("login-btn")[0];
let emailBtn = document.getElementsByClassName("login-email")[0];
let pswdLoginBtn = document.getElementsByClassName("login-pswd")[0];
let emailL=localStorage.getItem("emailR");
let pswdL=localStorage.getItem("pswdR");
loginBtn.addEventListener("click", function (e) {
	e.preventDefault();
	let emailLogin = document.getElementsByClassName("login-email")[0].value;

var pswdLogin = document.getElementsByClassName("login-pswd")[0].value;
if((emailL == emailLogin) && (pswdL == pswdLogin ) )
{
	
	
	emailBtn.parentNode.children[1].classList.remove("error-show");
	emailBtn.parentNode.children[2].classList.remove("error-show");
	pswdLoginBtn.parentNode.children[1].classList.remove("error-show");
	pswdLoginBtn.parentNode.children[2].classList.remove("error-show");
	 window.alert("Success")
	location.href="fb-home/index.html"
}
else
{
	
	
	emailBtn.parentNode.children[1].classList.add("error-show");
	emailBtn.parentNode.children[2].classList.add("error-show");
	pswdLoginBtn.parentNode.children[1].classList.add("error-show");
	pswdLoginBtn.parentNode.children[2].classList.add("error-show");
	
	
}

})


















