// Always track current user globally
window.currentUser = localStorage.getItem("username") || null;

function login(username, type) {
    if (!username || username.trim() === "") {
        alert("Please enter a username");
        return;
    }

    let finalUsername = username.trim();
    if (type === "work") {
        finalUsername = "@" + finalUsername;
    }

    localStorage.setItem("username", finalUsername);
    window.currentUser = finalUsername;

    console.log("Logged in as:", finalUsername);

    // Hard reload so nothing blocks it
    window.location.replace(window.location.href);
}

function logout() {
    localStorage.removeItem("username");
    window.currentUser = null;

    console.log("User logged out.");

    // Hard reload
    window.location.replace(window.location.href);
}

// Setup UI after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const logoutSection = document.getElementById("logoutSection");
    const displayUser = document.getElementById("displayUser");

    const loginWorkBtn = document.getElementById("loginWork");
    const loginOtherBtn = document.getElementById("loginOther");
    const logoutBtn = document.getElementById("logoutBtn");

    if (window.currentUser) {
        loginForm.style.display = "none";
        logoutSection.style.display = "block";
        displayUser.textContent = window.currentUser;
    } else {
        loginForm.style.display = "block";
        logoutSection.style.display = "none";
    }

    loginWorkBtn.addEventListener("click", () => {
        login(document.getElementById("username").value, "work");
    });

    loginOtherBtn.addEventListener("click", () => {
        login(document.getElementById("username").value, "other");
    });

    logoutBtn.addEventListener("click", () => {
        logout();
    });
});
