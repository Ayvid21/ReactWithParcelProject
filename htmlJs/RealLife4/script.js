var element = document.querySelectorAll(".element");

element.forEach(function(value) {
    var img = value.querySelector("img");
    
    value.addEventListener("mouseenter", function() {
        img.style.opacity = 1;
    });
    value.addEventListener("mouseleave", function() {
        img.style.opacity = 0;
    });
    value.addEventListener("mousemove", function(details) {
        img.style.left = details.x + "px";
        img.style.top = details.y + "px";
    })    
});



// var elementImage = document.querySelector("#elem1 img");
// element.addEventListener("mousemove", function(details) {
//     elementImage.style.left = details.x + "px";
//     elementImage.style.top = details.y + "px";
// });

// element.addEventListener("mouseenter", function(details) {
//     elementImage.style.opacity = 1;
// });

// element.addEventListener("mouseleave", function(details) {
//     elementImage.style.opacity = 0;
// })
