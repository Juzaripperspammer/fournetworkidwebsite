// Global variable to store the logged-in user
window.currentUser = null;

// Function to log in with role choice
function login(username, type) {
    if (!username || username.trim() === "") {
        alert("Please enter a username");
        return;
    }

    let finalUsername = username.trim();
    if (type === "work") {
        finalUsername = "@" + finalUsername;
    }

    // Save username in localStorage
    localStorage.setItem("username", finalUsername);

    // Update global variable
    window.currentUser = finalUsername;

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

    // Reload page
    location.reload(true); // force reload ignoring cache
}

// Run checkLogin() when the script loads
checkLogin();
