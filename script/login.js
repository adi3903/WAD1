function login() {
  var usernameValue = document.getElementById("username").value;
  var passwordValue = document.getElementById("password").value;

  if (usernameValue.trim() === "" || passwordValue.trim() === "") {
    alert("Enter again");
  } else {
    window.location.href = "/templates/index.html";
    alert("Successfully login");
  }
}
function signup() {
  var signupUservalue = document.getElementById("signup-user").value;
  var signupEmailvalue = document.getElementById("signup-email").value;
  var signupPasswordvalue = document.getElementById("signup-password").value;

  if (
    signupUservalue.trim() === "" ||
    signupEmailvalue.trim() === "" ||
    signupPasswordvalue.trim() === ""
  ) {
    alert("Enter all required fields");
  } else {
    alert("Successfully registered");
  }
}

//for making background blur
document.addEventListener("DOMContentLoaded", function () {
  var loginContainer = document.querySelector(".container");
  var backgroundContainer = document.querySelector(".background-container");

  loginContainer.addEventListener("mouseover", function () {
    backgroundContainer.style.filter = "blur(2px)";
  });
  loginContainer.addEventListener("mouseout",function(){
    backgroundContainer.style.filter="none";
  })
});

//For toggling the page 
function toggleForm() {
  var loginForm = document.getElementById("login");
  var signupForm = document.getElementById("signup");

  if (signupForm.style.display !== "block") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }
}


