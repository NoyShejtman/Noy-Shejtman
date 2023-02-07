const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

document.getElementById("email").value = loggedInUser.email;
document.getElementById("oldEmail").value = loggedInUser.email;
