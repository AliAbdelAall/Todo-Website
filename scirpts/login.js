const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  if (username === "AdminSEF123" && password === "SeF@ctORy$$456") {
    window.location.href = "../../pages/todo.html"
  } else {
    alert("Username or Password Incorrect")
  }
})