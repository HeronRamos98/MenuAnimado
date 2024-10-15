const navBar = document.querySelector('.navbar')
const allli = document.querySelectorAll('li')

allli.forEach( (li, index) => {
    li.addEventListener("click", e => {
        navBar.querySelector(".active-list").classList.remove("active-list")

    })

})


