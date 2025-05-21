const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');

green.addEventListener("click", (e) => {
    console.log("green")
}) // bubbling -> event goes from child to parent

pink.addEventListener("click", (e) => {
    console.log("pink")
})

blue.addEventListener("click", (e) => {
    // e.stopPropagation(); // to stop bubbling
    console.log("blue")
}, true) // true show capturing -> it going from parent to child