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
    let filtrof = document.querySelector(".modalf");
    switch(button){
        case 'cidade':
            filtrof.style.display = 'flex'
        break
        case 'filtrar':
            filtrof.style.display = 'none'
    }
}

let btns = document.querySelectorAll(".area_conteudo");

// Adicionando evento de clique em cada um dos elementos
btns.forEach(function btn(btns){
    btns.addEventListener("click", btns2)
})

function btns2() {
    let name = document.querySelector(".name"); 
    let rua = document.querySelector(".rua"); 
    let bairro = document.querySelector(".bairro"); 
    let phones = document.querySelector(".bairro");
    let produtos = document.querySelector(".produtos") 
    let midia = document.querySelector(".midia")
    let lojas = document.querySelector(".modalc");
    let esc = this.querySelector(".p").textContent;  // Captura o texto da área clicada

    switch (esc) {
        case 'Nome: Aj venturi':
            lojas.style.display = 'flex';
            name.textContent = "Aj Venturi";
            rua.textContent = "Henrique Bichels N: 232";
            bairro.textContent = "Centro";      
            // Criando o elemento de imagem e adicionando corretamente
            let img = document.createElement("img");
            img.src = "img/logos/aj.png";
            img.width = 35; // ou img.style.width = "35px";
            midia.appendChild(img);  // Adicionando o elemento img à variável midia          
            phones.textContent = "(47) 991967337";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Remédios Genéricos</li><li>Perfumaria</li><li>Vitaminas</li>";
        break;

        case 'Nome: Esquina':
            lojas.style.display = 'flex';
            name.textContent = "Esquina";
            rua.textContent = "Jorge lacerda N: 21";
            bairro.textContent = "Centro";              
            phones.textContent = "(47) 997508905";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Pizza</li><li>Hamburguer</li>";
            break;  // Corrigido para parar após o segundo caso
        default:
            break;  // Adicionando default para casos não previstos
    }

}
let fecharModal = document.querySelector(".fechar_modal");
fecharModal.addEventListener("click", function() {
    document.querySelector(".modalc").style.display = 'none';
});
