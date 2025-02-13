// function que abre e fecha o menu
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
// function que para o filtro das cidades
function btnn(button) {
    // Obtém os rádios selecionados
    let filtroc = document.querySelector('input[name="cidade"]:checked');
    let filtroe = document.querySelector('input[name="estabelecimento"]:checked');

    // Verifica se os rádios foram selecionados para evitar erro
    let valorCidade = filtroc ? filtroc.value : "";
    let valorEstabelecimento = filtroe ? filtroe.value : "";

    // Obtém todas as divs dentro da div mãe .area_conteudo
    let areaf = document.querySelectorAll('.area_conteudo');

    // Função para filtrar as divs com base na cidade ou estabelecimento selecionado
    function filtrar() {
        areaf.forEach(function (divf) {
            // Obtém os valores de 'data-cidade' e 'data-estabelecimento' para cada div
            let filtroCidadeDiv = divf.querySelector('.cidadename') ? divf.querySelector('.cidadename').getAttribute('data-cidade') : "";
            let filtroEstabelecimentoDiv = divf.querySelector('.tiponame') ? divf.querySelector('.tiponame').getAttribute('data-estabelecimento') : "";

            // Verifica se a cidade ou estabelecimento da div corresponde ao valor do rádio selecionado
            let cidadeMatch = valorCidade !== "" ? filtroCidadeDiv === valorCidade : true;
            let estabelecimentoMatch = valorEstabelecimento !== "" ? filtroEstabelecimentoDiv === valorEstabelecimento : true;

            // Exibe ou esconde a div com base na correspondência dos filtros
            if (cidadeMatch && estabelecimentoMatch) {
                divf.style.display = 'grid'; // Exibe a div com grid
                divf.classList.remove('none'); // Remove a classe 'none', se existir
            } else {
                divf.style.display = 'none'; // Não exibe a div
                divf.classList.add('none'); // Adiciona a classe 'none' à div
            }
        });
    }

    // Verifica qual botão foi pressionado
    let filtrof = document.querySelector(".modalf");
    switch (button) {
        case 'CIDADE':
            filtrof.style.display = 'flex'; // Exibe o filtro de cidade
            break;
        case 'removefiltro':
            let filtroc = document.querySelector('input[name="cidade"]:checked');
            let filtroe = document.querySelector('input[name="estabelecimento"]:checked');
            let itens = document.querySelectorAll('.item'); // Seleciona todos os itens

            if (filtroc) {
                filtroc.checked = false;
            }
            if (filtroe) {
                filtroe.checked = false;
            }

            // Garante que todos os itens tenham display: grid
            itens.forEach(function (item) {
                item.style.display = 'grid';
            });

            break;

        case 'Remover Filtro':

            break;

        case 'Filtrar':
            filtrar(); // Chama a função de filtragem quando o botão "Filtrar" for pressionado
            filtrof.style.display = 'none'; // Fecha o filtro após a aplicação
            break;
    }
}




// function refente a abrir e fechar o modal, onde aparece os dados individuais de cada empresa
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
            btnw.href = "https://wa.me/5547991967337";
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
            btnw.href = "https://wa.me/5547997508905";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Pizza</li><li>Hamburguer</li>";
            break;  // Corrigido para parar após o segundo caso

        case 'Nome: Doce Delicia':
            lojas.style.display = 'flex';
            img.src = "img/logos/docedelicia.png"
            img.alt = "Logo do Food Truck Doce Delicia"
            imgf.style.background = "white"
            name.textContent = "Doce Delicia";
            rua.textContent = "Rodovia Bruno Heidrich N:S/N Proximo A Rodhen Vidros";
            bairro.textContent = "Br 470";
            midia.href = "https://www.instagram.com/doce_deliciaaaa_?igsh=NWVoYXRjbWF4MTBp";
            midias.href = "https://wa.me/5547992897078";
            phones.textContent = "(47) 992897078";
            btnw.href = "https://wa.me/5547992897078";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>A partir de R$30 2% de desconto</li><li>A partir de R$50 10% de desconto</li>";
            break;  
            case 'Nome: Point do Açai':
                lojas.style.display = 'flex';
                img.src = "img/logos/POINT.png"
                img.alt = "Logo do point do açai"
                imgf.style.background = "#75196E"
                name.textContent = "Point do Açai";
                rua.textContent = "Rua 7 de Setembro N: 569";
                bairro.textContent = "Independência";
                midia.href = "https://www.instagram.com/pointdoacaisorvetes?igsh=MXh2YmpvYnNzcDdxdA==";
                midias.href = "https://wa.me/5547992281688";
                phones.textContent = "(47) 992281688";
                btnw.href = "https://wa.me/5547992281688";
                // Adicionando produtos de forma correta
                produtos.innerHTML = "<li>10% Para:</li><li>Marmita 400gm</li><li>Barca 500gm</li>";
                break;  // Corrig// Corrigido para parar após o segundo caso
        default:
            break;  // Adicionando default para casos não previstos
    }

}
let fecharModal = document.querySelector(".fechar_modal");
fecharModal.addEventListener("click", function () {
    document.querySelector(".modalc").style.display = 'none';
});
