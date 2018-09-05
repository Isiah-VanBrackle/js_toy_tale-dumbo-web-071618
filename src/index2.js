const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

console.log("Content not yet loaded")
document.addEventListener("DOMContentLoaded", () => {
console.log("Content loaded");
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(json => {
      let data = json[0]
      console.log(data)
      return data
    })
    .then(data => {
      //need to learn how to make the class="card"
    })
// this marks the end of the document.addEventListener
})

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form - referece to the hide and seek lab i'm on.
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
