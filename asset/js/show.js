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

function showOption1() {
    js__optionList.classList.toggle('show__option')
}
js__navbarOption.addEventListener('click', showOption1)


// responesive

// change language
const js__mobileOption = document.querySelector('.js__mobile-option')
const js__mobileChange = document.querySelector('.js__mobile-list')

function showOption2() {
    js__mobileChange.classList.toggle('show__mobile-language')
}
js__mobileOption.addEventListener('click', showOption2)

// thanh menu

const js__mobileMenu = document.querySelector('.js_menu')
const js__mobileOverlay = document.querySelector('.js__show-overlay')
const js__mobile = document.querySelector('.js__show')
const js__colse = document.querySelector('.js__close')


function showMenu() {
    js__mobileOverlay.classList.add('nav__overlay-show')
    js__mobile.classList.add('show__mobile')
}
js__mobileMenu.addEventListener('click', showMenu)

function hideMenu() {
    js__mobileOverlay.classList.remove('nav__overlay-show')
    js__mobile.classList.remove('show__mobile')
}
js__mobileOverlay.addEventListener('click', hideMenu)
js__colse.addEventListener('click', hideMenu)