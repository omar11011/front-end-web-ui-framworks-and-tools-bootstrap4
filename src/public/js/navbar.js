const name_page = document.title.split(":").pop().toLowerCase().trim()
const element = document.getElementById('nav-option-' + name_page)

element.className += 'active'
element.style.color = 'white'
element.style.textDecoration = 'none'