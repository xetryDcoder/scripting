window.onload = function() {
    
    var username = sessionStorage.getItem("username");
	if (username) {
		window.location.href = "index.html";
	} else {
		document.getElementById("message").innerHTML = "Please login to continue.";
	}
};

let dbUser = "admin"
let dbPassword ="password"

// Function to set a session after login
function setSession(username) {
	sessionStorage.setItem("username", username);
}

// Event listener for the login form
document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form from submitting

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Check if the username and password are correct (replace with your own authentication logic)
	if (username === dbUser && password === dbPassword) {
		setSession(username);
        window.location.href = "index.html";
	} else {
		document.getElementById("message").innerHTML = "Invalid username or password.";
	}
});
