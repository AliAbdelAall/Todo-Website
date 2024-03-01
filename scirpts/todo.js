const input_box = document.getElementById("input-box")
const list_container = document.getElementById("list-container")
const button = document.getElementById("button")

button.addEventListener("click", function () {
  if (input_box.value === '') {
    alert("you must add a task first")

  } else {
    const li = document.createElement("li")
    li.innerHTML = input_box.value
    list_container.append(li)

    const icon = document.createElement("i")
    icon.className = "fa-solid fa-x"
    li.append(icon)
  }
  input_box.value = ""
})

list_container.addEventListener("click", function (element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked")

  } else if (element.target.tagName === "I") {
    element.target.parentElement.remove()
  }
})

