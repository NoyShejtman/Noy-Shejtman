const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
document.getElementById("age").value = loggedInUser.age;
