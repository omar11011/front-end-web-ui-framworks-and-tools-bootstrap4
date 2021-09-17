const name_page = document.title.split(":").pop().toLowerCase().trim()
const element = document.getElementById('nav-option-' + name_page)

element.style.opacity = 1