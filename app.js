let value = document.querySelector("h2")

let count = 0

function incrementValue() {
    count = count + 1
    value.innerText = count
}

function decrementValue() {
  count = count - 1
  value.innerText = count
}
