let menu = document.querySelector(".menu_mobile_bar")
menu.addEventListener("click", () => {
    let content = document.querySelector("main")
    let menu_m = document.querySelector(".menu_area")

    if(menu_m.style.height == "100vh" ){
        menu_m.style.height = "6vh"
        content.classList.remove('hidden')
    } else{
        menu_m.style.height = "100vh"
        content.classList.toggle('hidden')
    }
})

function btn(button){
    let filtrof = document.querySelector(".modal");
    switch(button){
        case 'cidade':
            filtrof.style.display = 'flex'
        break
        case 'filtrar':
            filtrof.style.display = 'none'
    }
}


function btns(button){
    let lojas = document.querySelector(".modalc");
    let fechar = document.querySelector(".fechar_modal")

    switch(button){
        case 'Aj venturi':
            lojas.style.display = 'flex'
        break
        case 'Ajventuri_m':
            fechar.style.display = 'none'
            
     }
}