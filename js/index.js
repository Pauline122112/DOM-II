//Selector list
const mouseOver = document.querySelector('.nav, a')
console.log(mouseOver)

const headOne = document.querySelector('.logo-heading')
console.log(headOne)

// const focus = document.createElement('div #form')
// console.log(focus)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
mouseOver.addEventListener('mouseover', function( event ) {
   event.target.style.color = 'orange'
   setTimeout(function() {
       event.target.style.color = ''
   }, 500)

}, false)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1 Mouseover <h1> yellow up

// console.log(headONE);
    headOne.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'yellow'; 
    });
    headOne.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = 'white';   
    });

    headOne.addEventListener('mouseover', e => {
        e.target.style.fontSize = '80px'
        setTimeout(function() {
            e.target.style.fontSize = ''
        }, 500)
    }, false)