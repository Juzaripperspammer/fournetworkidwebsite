// Global variable to store the logged-in user
window.currentUser = null;

// Function to log in
function login(username) {
    if (!username || username.trim() === "") {
        alert("Please enter a username");
        return;
    }

    // Save username in localStorage
    localStorage.setItem("username", username.trim());

    // Update global variable
    window.currentUser = username.trim();

    console.log("Logged in as:", window.currentUser);
}

// Function to check if a user is already logged in
function checkLogin() {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        window.currentUser = savedUser;
        console.log("Welcome back,", savedUser);
    } else {
        console.log("No user logged in.");
    }
}

// Function to log out
function logout() {
    localStorage.removeItem("username");
    window.currentUser = null;
    console.log("User logged out.");
}

// Run checkLogin() when the script loads
checkLogin();
