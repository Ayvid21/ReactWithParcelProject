const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// // const card = document.querySelector(".card");

// // h1.cloneNode(true)
// // container.appendChild(h1.cloneNode(true))

// // container.appendChild(card.cloneNode(true) )

// for (let i = 2; i <= 100; i++) {
//     const newCard = card.cloneNode();
//     newCard.innerText = i;
//     container.appendChild(newCard);
// }

// pokemon
// for (let i = 1; i <= 1025; i++) {
//   const imageContainer = document.createElement("div");
//   imageContainer.classList.add("img-container");

//   const newImage = document.createElement("img");
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//   const paragraph = document.createElement("p");
//   paragraph.innerText = `${i}`;

//   imageContainer.append(newImage, paragraph);
//   container.append(imageContainer);
// }

for (let i = 1; i <= 1025; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");

    const myHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" />
        <p class="numbering">${i}</p>
    `;
    imageContainer.innerHTML = myHTML;
    container.appendChild(imageContainer);
}

//remove any object form the given list
const myImg = document.querySelector("body > div > div:nth-child(5) ")
// myImg.parentElement.removeChild(myImg)
myImg.remove()
