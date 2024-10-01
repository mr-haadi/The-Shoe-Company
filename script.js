const menuBar = document.querySelector('.menu')
const closeIcon = document.querySelector('.close-icon')

menuBar.addEventListener('click', (e) => {
    e.stopPropagation()
    menuBar.parentElement.classList.add('open-menu')
    
})

closeIcon.addEventListener('click', (e) => {
    menuBar.parentElement.classList.remove('open-menu')
})

closeIcon.parentElement.addEventListener('click', (e) => {
    e.stopPropagation()
})

window.addEventListener('click', (e) => {
    menuBar.parentElement.classList.remove('open-menu')
})