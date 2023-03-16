const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const menu = document.querySelector('.hamburger-menu')

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle('open')
    const isOpen = menu.classList.contains('open')
 
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
})