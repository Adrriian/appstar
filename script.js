let menu = document.querySelector(".menu_mobile_bar")
menu.addEventListener("click", () => {
    let content = document.querySelector("main")
    let menu_m = document.querySelector(".menu_area")

    if (menu_m.style.height == "100vh") {
        menu_m.style.height = "6vh"
        content.classList.remove('hidden')
    } else {
        menu_m.style.height = "100vh"
        content.classList.toggle('hidden')
    }
})

function btnn(button) {
    
    let filtrof = document.querySelector(".modalf");
    switch (button) {
        case 'cidade':
            filtrof.style.display = 'flex'
            break
        case 'filtrar':
            filtrof.style.display = 'none'
    }
}

let btns = document.querySelectorAll(".area_conteudo");

// Adicionando evento de clique em cada um dos elementos
btns.forEach(function btn(btns) {
    btns.addEventListener("click", btns2)
})

function btns2() {
    let img = document.querySelector(".img_troca")
    let imgf = document.querySelector(".area_content_img")
    let name = document.querySelector(".name");
    let rua = document.querySelector(".rua");
    let bairro = document.querySelector(".bairro");
    let phones = document.querySelector(".phones");
    let produtos = document.querySelector(".produtos")
    let midia = document.querySelector(".links");
    let midias = document.querySelector(".links2");
    let btnw = document.querySelector(".btnw")
    let lojas = document.querySelector(".modalc");
    let esc = this.querySelector(".p").textContent;  // Captura o texto da área clicada

    switch (esc) {
        case 'Nome: Aj venturi':
            lojas.style.display = 'flex';
            img.src = "img/logos/aj.png"
            img.alt = "Logo da farmacia aj venturi"
            imgf.style.background = "white"
            name.textContent = "Aj Venturi";
            rua.textContent = "Henrique Bichels N: 232";
            bairro.textContent = "Centro";
            // Criando o elemento de imagem e adicionando corretamente
            midia.href = "https://www.instagram.com/farmacia_ajventuri?igsh=MXBnaG4xYnFuMWhmZg==";
            midias.href = "https://wa.me/5547991967337";
            phones.textContent = "(47) 991967337";
            btnw.href="https://wa.me/5547991967337";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Remédios Genéricos</li><li>Perfumaria</li><li>Vitaminas</li>";
            break;

        case 'Nome: Esquina':
            lojas.style.display = 'flex';
            img.src = "img/logos/esquina.jpg"
            img.alt = "Logo da lanchonete esquina"
            imgf.style.background = "black"
            name.textContent = "Esquina";
            rua.textContent = "Jorge lacerda N: 21";
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/esquina.pizzaria_hamburgueria?igsh=M3d6eTQ5cHZhZXQ5";
            midias.href = "https://wa.me/5547997508905";
            phones.textContent = "(47) 997508905";
            btnw.href="https://wa.me/5547997508905";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Pizza</li><li>Hamburguer</li>";
            break;  // Corrigido para parar após o segundo caso
            
             case 'Nome: Doce Delicia':
            lojas.style.display = 'flex';
            img.src = "img/logos/docedelicia.jpg"
            img.alt = "Logo do Food Truck Doce Delicia"
            imgf.style.background = "white"
            name.textContent = "Doce Delicia";
            rua.textContent = "Rodovia Bruno Heidrich N:S/N Proximo A Rodhen Vidros";
            bairro.textContent = "Br 470";
            midia.href = "https://www.instagram.com/doce_deliciaaaa_?igsh=NWVoYXRjbWF4MTBp";
             midias.href = "https://wa.me/5547992897078";
            phones.textContent = "(47) 992897078";
            btnw.href="https://wa.me/5547992897078";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>A partir de R$30 2% de desconto</li><li>A partir de R$50 10% de desconto</li>";
            break;  // Corrigido para parar após o segundo caso
        default:
            break;  // Adicionando default para casos não previstos
    }

}
let fecharModal = document.querySelector(".fechar_modal");
fecharModal.addEventListener("click", function () {
    document.querySelector(".modalc").style.display = 'none';
});
