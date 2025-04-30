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
    let num = document.querySelector(".num")
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
            rua.textContent = "Henrique Bichels";
            num.textContent = "232"
            bairro.textContent = "Centro";
            // Criando o elemento de imagem e adicionando corretamente
            midia.href = "https://www.instagram.com/farmacia_ajventuri?igsh=MXBnaG4xYnFuMWhmZg==";
            midias.href = "https://wa.me/5547991967337";
            phones.textContent = "(47) 991967337";
            btnw.href = "https://wa.me/5547991967337";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% Remédios Genéricos</li><li>5% Perfumaria</li><li>5% Vitaminas</li>";
            break;

        case 'Nome: Esquina':
            lojas.style.display = 'flex';
            img.src = "img/logos/esquina.jpg"
            img.alt = "Logo da lanchonete esquina"
            imgf.style.background = "black"
            name.textContent = "Esquina";
            rua.textContent = "Jorge lacerda";
            num.textContent = "21"
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/esquina.pizzaria_hamburgueria?igsh=M3d6eTQ5cHZhZXQ5";
            midias.href = "https://wa.me/5547997508905";
            phones.textContent = "(47) 997508905";
            btnw.href = "https://wa.me/5547997508905";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% Para:</li> <li>Pizza</li><li>Hamburguer</li>";
            break;  // Corrigido para parar após o segundo caso

        case 'Nome: Doce Delicia':
            lojas.style.display = 'flex';
            img.src = "img/logos/docedelicia.png"
            img.alt = "Logo do Food Truck Doce Delicia"
            imgf.style.background = "white"
            name.textContent = "Doce Delicia";
            rua.textContent = "Rodovia Bruno Heidrich";
            num.textContent = "S/N"
            bairro.textContent = "Br 470";
            midia.href = "https://www.instagram.com/doce_deliciaaaa_?igsh=NWVoYXRjbWF4MTBp";
            midias.href = "https://wa.me/5547992897078";
            phones.textContent = "(47) 992897078";
            btnw.href = "https://wa.me/5547992897078";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>Delivery e retirada no local</li> <li>A partir de R$30 2% <br> de desconto</li><li>A partir de R$50 10% <br> de desconto</li>";
        break;  
        case 'Nome: Point do Açai':
            lojas.style.display = 'flex';
            img.src = "img/logos/POINT.png"
            img.alt = "Logo do point do açai"
            imgf.style.background = "#75196E"
            name.textContent = "Point do Açai";
            rua.textContent = "Rua 7 de Setembro";
            num.textContent = "569"
            bairro.textContent = "Independência";
            midia.href = "https://www.instagram.com/pointdoacaisorvetes?igsh=MXh2YmpvYnNzcDdxdA==";
            midias.href = "https://wa.me/5547992281688";
            phones.textContent = "(47) 992281688";
            btnw.href = "https://wa.me/5547992281688";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% Para:</li> <li>Marmita 400gm</li> <li>Barca 500gm</li>";
        break;  // Corrig// Corrigido para parar após o segundo caso
        case 'Nome: Diego Chapeação Pintura':
            lojas.style.display = 'flex';
            img.src = "img/logos/diegochapeacao.jpeg"
            img.alt = "Logo Diego Chapeação Pintura"
            imgf.style.background = "black"
            name.innerHTML = "Diego Chapeação<br>Pintura";
            rua.textContent = "Rua 23 De Julho";
            num.textContent = "1265"
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/diegochapeacaoepintura?igsh=bnF6cXVwZnphdXVr";
            midias.href = "https://wa.me/55479991077674";
            phones.textContent = "(47) 991077674";
            btnw.href = "https://wa.me/5547991077674";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% De Desconto<br>Em Serviços Particulares</li><li>(Somente Avista)<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso
        case 'Nome: Dijan Chapeação Pintura':
            lojas.style.display = 'flex';
            img.src = "img/logos/dijan.jpeg"
            img.alt = "Logo Dijan Chapeaçao e Pintura"
            imgf.style.background = "black"
            name.innerHTML = "Dijan Chapeação<br>Pintura";
            rua.textContent = "BR470 km175";
            num.textContent = "1265"
            bairro.textContent = "Arno Siewerdt";
            midia.href = "https://www.instagram.com/chapeacaodijan?igsh=MWMyNnhlMHQ2M3c4cg==";
            midias.href = "https://wa.me/5547991603096";
            phones.textContent = "(47) 991603096";
            btnw.href = "https://wa.me/5547991603096";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>5% De Desconto<br>Em Serviços Particulares<br>e na franquia</li><li>(Somente Avista)<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Minibom':
            lojas.style.display = 'flex';
            img.src = "img/logos/minibom.jpeg"
            img.alt = "Logo Auto Posto PR"
            imgf.style.background = "#fff5f6"
            name.innerHTML = "Minibom";
            rua.textContent = "Rua Nereu Ramos";
            num.textContent = "48 sala 01"
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/minibomsorveteecafe?igsh=MWQ4YXlrcHpneGdxMg==";
            midias.href = "https://wa.me/5547997750531";
            phones.textContent = "(47) 997750531";
            btnw.href = "https://wa.me/5547997750531";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>8% de Desconto nos produtos<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Pijurauto':
            lojas.style.display = 'flex';
            img.src = "img/logos/pijurauto.jpeg"
            img.alt = "Logo Pijurauto"
            img.style.border = "2px solid white"
            imgf.style.background = "#f26022"
            name.innerHTML = "Pijurauto";
            rua.textContent = "Rua Presidente Nereu";
            num.textContent = "131"
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/postopijurautocascata?igsh=bWNtc2dwcGY5Y2R0";
            midias.href = "https://wa.me/5547991190080";
            phones.textContent = "(47) 991190080";
            btnw.href = "https://wa.me/5547991190080";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>20 centavos de desconto no litro de Gasolina comum<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Vision Estética Automotiva':
            lojas.style.display = 'flex';
            img.src = "img/logos/vision.jpeg"
            img.alt = "Logo Vision"
            imgf.style.background = "#2e1c1a"
            name.innerHTML = "Vision Estética Automotiva";
            rua.textContent = "SC 350 km375 (junto ao posto gaucho)";
            num.textContent = "S/n"
            bairro.textContent = "Santa Teresa";
            midia.href = "https://www.instagram.com/vision.estetica_automotiva?igsh=MW5jcXIzNnZ0cmJ3ag==";
            midias.href = "https://wa.me/5547997351553";
            phones.textContent = "(47) 997351553";
            btnw.href = "https://wa.me/5547997351553";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% na lavação automotiva<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Tintas Wilson e Filho':
            lojas.style.display = 'flex';
            img.src = "img/logos/tintas.jpeg"
            img.alt = "Logo Tintas Wilson e Filho"
            imgf.style.background = "white"
            name.innerHTML = "Tintas Wilson e Filho";
            rua.textContent = "Rua prefeito querino ferrari";
            num.textContent = "176"
            bairro.textContent = "Centro";
            midia.href = "https://www.instagram.com/tintaswilsonefilho?igsh=MTFhamE3M29oODJrdQ==";
            midias.href = "https://wa.me/5547935451509";
            phones.textContent = "(47) 935451509";
            btnw.href = "https://wa.me/5547935451509";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>5% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Ovande Oficina Mecânica':
            lojas.style.display = 'flex';
            img.src = "img/logos/ovande.png"
            img.alt = "Logo Ovande Oficina Mecânica"
            img.style.border = "2px solid white"
            imgf.style.background = "#054897"
            name.innerHTML = "Ovande Oficina Mecânica";
            rua.textContent = "Rua dos Pioneiros";
            num.textContent = "2112"
            bairro.textContent = "Centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5547988123141";
            phones.textContent = "(47) 988123141";
            btnw.href = "https://wa.me/5547988123141";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% de Descontos Nas Peças<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Auto Elétrica Pesenti Ltda':
            lojas.style.display = 'flex';
            img.src = "img/logos/eletrica.png"
            img.alt = "Logo Ovande Oficina Mecânica"
            imgf.style.background = "#0d1021"
            name.innerHTML = "Auto Elétrica Pesenti Ltda";
            rua.textContent = "Av. 25 de julho";
            num.textContent = "298"
            bairro.textContent = "Centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5547999939094";
            phones.textContent = "(47) 999939094";
            btnw.href = "https://wa.me/5547999939094";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>5% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Chaves JVS':
            lojas.style.display = 'flex';
            img.src = "img/logos/chaveiro.png"
            img.alt = "Logo Chaveiro JVS"
            imgf.style.background = "white"
            name.innerHTML = "Chaves JVS";
            rua.textContent = "Rua dos Pioneiros";
            num.textContent = "647"
            bairro.textContent = "Centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5547988474810";
            phones.textContent = "(47) 988474810";
            btnw.href = "https://wa.me/5547988474810";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>15% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Auto Car':
            lojas.style.display = 'flex';
            img.src = "img/logos/autocar.png"
            img.alt = "Logo Auto Car"
            imgf.style.background = "black"
            name.innerHTML = "Auto Car";
            rua.textContent = "Raul Tenete Costa";
            num.textContent = "400"
            bairro.textContent = "Centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5549991848879";
            phones.textContent = "(49) 991848879";
            btnw.href = "https://wa.me/5549991848879";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>8% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Daniel Eletro':
            lojas.style.display = 'flex';
            img.src = "img/logos/danieleletro.jpeg"
            img.alt = "Logo Daniel Eletro"
            imgf.style.background = "#34004f"
            name.innerHTML = "Daniel Eletro";
            rua.textContent = "Rua Leonel Thiesen ";
            num.textContent = "2044"
            bairro.textContent = "Vila Nova";
            midia.href = "https://www.instagram.com/danieleletro.com.br?igsh=ZHlwZDA3bXp0eDNv";
            midias.href = "https://wa.me/5549999904389";
            phones.textContent = "(49) 999904389";
            btnw.href = "https://wa.me/5549999904389";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>15% de Desconto Na primeira Compra<li> <li>10% de Desconto Nas demais Compra<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: J.Santos':
            lojas.style.display = 'flex';
            img.src = "img/logos/jsantos.png"
            img.alt = "Logo J.Santos"
            imgf.style.background = "#464646"
            name.innerHTML = "J.Santos";
            rua.textContent = "Rua Governador Jorge Lacerda";
            num.textContent = "270"
            bairro.textContent = "centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5547991082330";
            phones.textContent = "(47) 991082330";
            btnw.href = "https://wa.me/5547991082330";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>15% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Pit Stop':
            lojas.style.display = 'flex';
            img.src = "img/logos/pitstop.jpeg"
            img.alt = "Logo Pit Stop"
            imgf.style.background = "black"
            name.innerHTML = "Pit Stop";
            rua.textContent = "Rua Guilherme Kanitz";
            num.textContent = "S/N"
            bairro.textContent = "centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/5547999289532";
            phones.textContent = "(47) 999289532";
            btnw.href = "https://wa.me/5547999289532";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>10% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
            case 'Nome: Posto Coração do Estado':
            lojas.style.display = 'flex';
            img.src = "img/logos/posto.jpeg"
            img.alt = "Logo Posto Coração do Estado"
            imgf.style.background = "#ffffff"
            name.innerHTML = "Posto Coração do Estado";
            rua.textContent = "Rodovia BR470 km 176";
            num.textContent = "10243"
            bairro.textContent = "centro";
            midia.href = "  https://www.instagram.com/posto_coracao_do_estado/";
            midias.href = "https://wa.me/554735451209";
            phones.textContent = "(47) 35451209";
            btnw.href = "https://wa.me/554735451209";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>3% de Desconto<li>";
        break;  // Corrig// Corrigido para parar após o segundo caso"
        case 'Nome: Loja Da Kau':
            lojas.style.display = 'flex';
            img.src = "img/logos/kau.jpeg"
            img.alt = "Logo Loja da Kau"
            imgf.style.background = "#f6f6f6"
            name.innerHTML = "Loja da Kau";
            rua.textContent = "Dorvalino Gonzaga";
            num.textContent = "96"
            bairro.textContent = "centro";
            midia.style.display = "none";
            midias.href = "https://wa.me/554799605878";
            phones.textContent = "(47) 99605878";
            btnw.href = "https://wa.me/554799605878";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>3% de Desconto<li>";
        break;
        case 'Nome: Santos Auto Center':
            lojas.style.display = 'flex';
            img.src = "img/logos/autocenter.png"
            img.alt = "Logo Santos Auto Center"
            imgf.style.background = "#f6f6f6"
            name.innerHTML = "Santos Auto Center";
            rua.textContent = "Leoberto leal";
            num.textContent = "103"
            bairro.textContent = "centro";
            midia.href = "https://www.instagram.com/autocentersantos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
            midias.href = "https://wa.me/5547999658278";
            phones.textContent = "(47) 999658278";
            btnw.href = "https://wa.me/5547999658278";
            // Adicionando produtos de forma correta
            produtos.innerHTML = "<li>5% de Desconto<li>";
        break; // Corrig// Corrigido para parar após o segundo caso"
        default:
            break;  // Adicionando default para casos não previstos
    }

}
let fecharModal = document.querySelector(".fechar_modal");
fecharModal.addEventListener("click", function () {
    let img = document.querySelector(".img_troca")
    img.style.border = "2px solid #ff5900"
    document.querySelector(".modalc").style.display = 'none';
});
