const userNameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

let inputValue;

// userNameInput.addEventListener('input', (event) => {
//     console.log("Input event", event);
//     inputValue = event.target.value
//     paragraph.innerText = inputValue
// })

// userNameInput.addEventListener('change', (event) => {
//     console.log("Change event", event);
//     inputValue = event.target.value
//     paragraph.innerText = inputValue
// })

// userNameInput.addEventListener('focus', (event) => {
//     console.log("Focus event", event);
//     inputValue = event.target.value
//     paragraph.innerText = inputValue
// })

// userNameInput.addEventListener('blur', (event) => {
//     console.log("Focus event", event);
//     inputValue = event.target.value
//     paragraph.innerText = inputValue
// })


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Form clicked", e)
})