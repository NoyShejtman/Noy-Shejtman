// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const firstName = document.querySelector("#fname").value;
//   const lastName = document.querySelector("#lname").value;
//   const type = document.querySelector("#type").value;
//   const email = document.querySelector("#email").value;
//   const content = document.querySelector("#content").value;
//   const newMessage = {
//     firstName,
//     lastName,
//     type,
//     email,
//     content,
//   };

//   const response = await fetch("/contact", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newMessage),
//   });

//   const result = await response.json();
//   alert(result.message);
// });
