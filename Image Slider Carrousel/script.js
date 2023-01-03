'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')



punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener('click', () =>{

        let position =i
        let operation = position *-49

        grande.style.transform = `translateX(${ operation }%)`

        punto.forEach((cadaPunto, i)=> {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
    
})