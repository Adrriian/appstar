let menu = document.querySelector(".menu_mobile_bar")
menu.addEventListener("click", () => {
    let content = document.querySelector("main")
    let menu_m = document.querySelector(".menu_mobile")

    if(menu_m.style.display == "flex"){
        content.style.display= 'flex'
        menu_m.style.display = 'none'
    } else{
        content.style.display = 'none'
        menu_m.style.display = 'flex'
    }
})