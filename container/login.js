window.currentUser = localStorage.getItem("username") || null;

function login(username, type) {
    if (!username || username.trim() === "") {
        alert("Invalid username");
        return;
    }

    const Invalidusername = /^[a-zA-Z0-9_]{3,16}$/;
    if (!Invalidusername.test(username.trim())) {
        alert("Invalid username");
        return;
    }
    let finalUsername = username.trim();
    if (type === "bedrock") {
        finalUsername = "." + finalUsername;
    }



    localStorage.setItem("username", finalUsername);
    window.currentUser = finalUsername;

    window.location.replace(window.location.href);
}

function logout() {
    localStorage.removeItem("username");
    window.currentUser = null;

    window.location.replace(window.location.href);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const logoutSection = document.getElementById("logoutSection");
    const displayUser = document.getElementById("displayUser");

    const loginBedrockBtn = document.getElementById("loginBedrock");
    const loginJavaBtn = document.getElementById("loginJava");
    const logoutBtn = document.getElementById("logoutBtn");

    if (window.currentUser) {
        loginForm.style.display = "none";
        logoutSection.style.display = "block";
        displayUser.textContent = window.currentUser;
    } else {
        loginForm.style.display = "block";
        logoutSection.style.display = "none";
    }

    loginBedrockBtn.addEventListener("click", () => {
        login(document.getElementById("username").value, "bedrock");
    });

    loginJavaBtn.addEventListener("click", () => {
        login(document.getElementById("username").value, "java");
    });

    logoutBtn.addEventListener("click", () => {
        logout();
    });
});
