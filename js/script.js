document.getElementById("contactForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        event.preventDefault();

       document.getElementById("errorMessage").innerHTML =
"Kindly complete all required fields before submitting.";

        document.getElementById("errorMessage").style.color = "#b94f8a";
    }
});