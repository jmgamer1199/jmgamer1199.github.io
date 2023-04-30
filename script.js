let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'F | Inicio'
})

window.addEventListener('focus', () => {
    document.title = previousTitle
})