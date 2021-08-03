let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitButton = document.querySelector("#submit-button");
let success = document.querySelector("#success");
let error = document.querySelector("#error");

submitButton.onclick = function (event) {
    event.preventDefault();

    if (username.value == "Baby Yoda" && password.value == "Squirtle") {
        success.style.display= "block";
        error.style.display = "none";
        document.body.style.backgroundColor = "lightblue"
        
    } else {
        success.style.display = "none";
        error.style.display = "block";
        document.body.style.backgroundColor = "rgb(50, 50, 50)"
    }

}