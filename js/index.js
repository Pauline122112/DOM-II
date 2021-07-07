// Your code goes here
const mouseNav = document.querySelectorAll('a')
console.log(mouseNav)


document.addEventListener('mouseover', function( event ) {
   event.target.style.color = 'orange'
   setTimeout(function() {
       event.target.style.color = ''
   }, 500)

}, false)


