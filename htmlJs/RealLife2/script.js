var container = document.querySelector("#container");
var like = document.querySelector("i");

container.addEventListener("dblclick", function() {
    like.style.transform = "translate(-50%, -50%) scale(1)";
    like.style.color = '#ed3c65';
    like.style.opacity = 0.9;
    setTimeout(function() {
        like.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000);
});