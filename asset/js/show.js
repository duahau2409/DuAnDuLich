// đăng ký đăng nhập
const mainA = document.querySelector('.mainA')
const registration = document.querySelector('.js__registration')
const mainB = document.querySelector('.mainB')
const logIn = document.querySelector('.js__log-in')
const formOffDefaultA = document.querySelector('.js__off-defaultA')
const formOffDefaultB = document.querySelector('.js__off-defaultB')



function showFormA() {
    mainA.classList.add('open')
}

function hideFormA() {
    mainA.classList.remove('open')
}

function showFormB() {
    mainB.classList.add('open')
}

function hideFormB() {
    mainB.classList.remove('open')
}

registration.addEventListener('click', showFormA)
logIn.addEventListener('click', showFormB)
mainA.addEventListener('click', hideFormA)
mainB.addEventListener('click', hideFormB)
formOffDefaultA.addEventListener('click', function (e) {
    e.stopPropagation()
})
formOffDefaultB.addEventListener('click', function (e) {
    e.stopPropagation()
})

// phần hiển thị  
const inputFind = document.querySelector('.js__show-find')
const textCalendar = document.querySelector('.js__show-calendar')
const textUser = document.querySelector('.js__show-user')
const showA = document.querySelector('.js__showA')
const showB = document.querySelector('.js__showB')
const showC = document.querySelector('.js__showC')


function showOutLineA() {
    showA.classList.add('header__input-ouline')
    showB.classList.remove('header__input-ouline')
    showC.classList.remove('header__input-ouline')
}
function showOutLineB() {
    showB.classList.add('header__input-ouline')
    showA.classList.remove('header__input-ouline')
    showC.classList.remove('header__input-ouline')
}
function showOutLineC() {
    showC.classList.add('header__input-ouline')
    showB.classList.remove('header__input-ouline')
    showA.classList.remove('header__input-ouline')
}
inputFind.addEventListener('click', showOutLineA)
textCalendar.addEventListener('click', showOutLineB)
textUser.addEventListener('click', showOutLineC)


//  phần ẩn và xử lý nổi bọt
const hide = document.querySelector('.js__hide')
const hideA = document.querySelector('.js__hideA')
const hideB = document.querySelector('.js__hideB')
const hideC = document.querySelector('.js__hideC')
function hideOutlineA() {
    hideA.classList.remove('header__input-ouline')
}
hide.addEventListener('click' , hideOutlineA)
hideA.addEventListener('click', function (e) {
    e.stopPropagation()
})
function hideOutlineB() {
    hideB.classList.remove('header__input-ouline')
}
hide.addEventListener('click' , hideOutlineB)
hideB.addEventListener('click', function (e) {
    e.stopPropagation()
})
function hideOutlineC() {
    hideC.classList.remove('header__input-ouline')
}
hide.addEventListener('click' , hideOutlineC)
hideC.addEventListener('click', function (e) {
    e.stopPropagation()
})

// hiển thị và ẩn đồng tiền và ngôn ngữ

const js__navbarOption = document.querySelector('.js__navbar-option')
const js__optionList = document.querySelector('.js__option-list')
const js__optionHide = document.querySelector('.navbar__option-hide')

function showOption() {
    js__optionList.classList.toggle('show__option')
}
js__navbarOption.addEventListener('click', showOption)

