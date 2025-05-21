document.addEventListener('DOMContentLoaded', () => {
    const firstBasket = document.querySelector('.basket-1 span')
    const secondBasket = document.querySelector('.basket-2 span')
    const rightArrow = document.querySelector('.right-arrow')
    const leftArrow = document.querySelector('.left-arrow')

    const totalApples = 10

    let applesInBasket2 = 0;
    let applesInBasket1 = totalApples - applesInBasket2;

    firstBasket.innerText = applesInBasket1
    secondBasket.innerText = applesInBasket2 

    rightArrow.addEventListener('click', () => {
        if( applesInBasket1 > 0 ) {
            applesInBasket1--
            firstBasket.innerText = applesInBasket1
            applesInBasket2++
            secondBasket.innerText = applesInBasket2
        }
    })

    leftArrow.addEventListener('click', () => {
        if( applesInBasket2 > 0 ) {
            applesInBasket1++
            firstBasket.innerText = applesInBasket1
            applesInBasket2--
            secondBasket.innerText = applesInBasket2
        }
    })
});