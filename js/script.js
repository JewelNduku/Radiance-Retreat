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

const darkModeButton = document.getElementById("darkModeBtn");

if (darkModeButton) {

    darkModeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeButton.innerHTML = "☀️ Light Mode";

        } else {

            darkModeButton.innerHTML = "🌙 Dark Mode";

        }

    });

}