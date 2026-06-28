// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {

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
}

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}