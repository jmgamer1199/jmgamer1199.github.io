/* let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'F | Inicio'
})

window.addEventListener('focus', () => {
    document.title = previousTitle
}) */

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('dark-mode-toggle-1')

const setTheme = (theme) => {
    document.documentElement.setAttribute('root', theme);
    localStorage.setItem('theme', theme)
}

slider.addEventListener('toggle', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);