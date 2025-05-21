const h1 = document.querySelector('h1')
const addCard = document.querySelector('.add-card')
const container = document.querySelector('.container')

let count = 1; // to add number in the card div

// function to have a functionality of adding new card
addCard.addEventListener('click', () => {
    const newCard = document.createElement('div') // creating a new div for the new card
    newCard.classList.add('card') // gives class to the new div created
    newCard.innerText = count++;
    container.append(newCard) // add the new card to the main container
} )