document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var username = document.getElementById("usernameInput").value;
    localStorage.setItem("username", username); // Store the username in local storage
    window.location.href = "main.html"; // Redirect to index.html
});
