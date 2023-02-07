const loginButton = document.getElementById("login_btn");
loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  const response = await fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status !== 200) {
    alert("Wrong email or password");
    return;
  }
  const loggedInUser = await response.json();
  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

  window.location.replace("search_page");
});
