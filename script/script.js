let menu = document.querySelector(".menu_mobile_bar")
menu.addEventListener("click", () => {
    let menu_m = document.querySelector(".menu_area")

    if (menu_m.style.height == "100vh") {
        menu_m.style.height = "6vh"
    } else {
        menu_m.style.height = "100vh"
    }
})

const API_URL = 'https://script.google.com/macros/s/AKfycbzH5_yD3TBZjU6OAS-9z9IolUZgjZn7QoQWjv2Y4VxrVC0s5Hi8_7-EKNCV84GgyrP9vQ/exec';

const areaContainer = document.querySelector(".area");
const modal = document.querySelector(".modalc");
let estabelecimentos = [];

async function fetchEstabelecimentos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        estabelecimentos = data;
        renderCards(estabelecimentos);
        preencherFiltroCidades(estabelecimentos);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

function renderCards(lista) {
    if (!areaContainer) return;
    areaContainer.innerHTML = "";

    lista.forEach(est => {
        if (!(est.nome && est.tipo && est.cidade && est.codigo && est.imagem && est.alt)) return;

        const card = document.createElement("div");
        card.className = "area_conteudo sm";
        card.setAttribute("data-cidade", est.cidade);
        card.setAttribute("data-tipo", est.tipo);
        card.setAttribute("data-info", encodeURIComponent(JSON.stringify(est)));

        card.innerHTML = `
            <div class="area_img">
                <img src="${formatImage(est.imagem)}" alt="${est.alt}" />
            </div>
            <div class="area_text">
                <h1 class="p">Nome: ${est.nome}</h1>
                <h1 class="tiponame">Tipo: ${est.tipo}</h1>
                <h1 class="cidadename">Cidade: ${est.cidade}</h1>
                <h1 class="codigo">Código: ${est.codigo}</h1>
            </div>
        `;

        card.addEventListener("click", () => abrirModal(est));
        areaContainer.appendChild(card);
    });
}

function preencherFiltroCidades(lista) {
    const container = document.querySelector('.filtro_cidade_area');
    if (!container) return;

    const cidadesExistentes = Array.from(container.querySelectorAll("input[name='cidade']"))
        .map(input => input.value.trim().toLowerCase());

    const cidades = [...new Set(lista.map(e => e.cidade).filter(Boolean))];

    cidades.forEach(cidade => {
        const cidadeId = cidade.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase();

        if (!cidadesExistentes.includes(cidadeId)) {
            const div = document.createElement("div");
            div.className = "filtro_cidade";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "cidade";
            input.id = cidadeId;
            input.value = cidade;

            const label = document.createElement("label");
            label.htmlFor = cidadeId;
            label.textContent = cidade;

            div.appendChild(input);
            div.appendChild(label);
            container.appendChild(div);
        }
    });
}

function abrirModal(info) {
    modal.querySelector(".img_troca").src = formatImage(info.imagem);
    modal.querySelector(".img_troca").alt = info.alt;
    modal.querySelector(".name").textContent = info.nome;
    modal.querySelector(".rua").textContent = info.endereco || "";
    modal.querySelector(".num").textContent = info.numero || "";
    modal.querySelector(".bairro").textContent = info.bairro || "";
    modal.querySelector(".phones").textContent = info.whats || "";

    const insta = modal.querySelector(".links");
    const whats = modal.querySelector(".links2");
    const btnContato = modal.querySelector(".btnw");

    insta.href = info.instagram || "#";
    insta.style.display = info.instagram ? "inline-block" : "none";

    const numeroWhats = (info.whats || "").replace(/\D/g, "");
    whats.href = `https://wa.me/${numeroWhats}`;
    btnContato.href = `https://wa.me/${numeroWhats}`;

    const produtos = modal.querySelector(".produtos");
    produtos.innerHTML = "";

    const descontos = (info.desconto || "").split(";").map(d => d.trim()).filter(Boolean);
    descontos.forEach(desc => {
        const li = document.createElement("li");
        li.textContent = desc;
        produtos.appendChild(li);
    });

    modal.style.display = "flex";
}

document.querySelector(".fechar_modal")?.addEventListener("click", () => {
    modal.style.display = "none";
});

function aplicarFiltro() {
    const cidadeSelecionada = document.querySelector('input[name="cidade"]:checked')?.value.toLowerCase();
    const tipoSelecionado = document.querySelector('input[name="estabelecimento"]:checked')?.value.toLowerCase();

    const cards = document.querySelectorAll(".area_conteudo");
    let encontrados = 0;

    cards.forEach(card => {
        const cardCidade = card.getAttribute("data-cidade").toLowerCase();
        const cardTipo = card.getAttribute("data-tipo").toLowerCase();

        const cidadeMatch = cidadeSelecionada ? cardCidade === cidadeSelecionada : true;
        const tipoMatch = tipoSelecionado ? cardTipo === tipoSelecionado : true;

        const exibir = cidadeMatch && tipoMatch;
        card.style.display = exibir ? "grid" : "none";

        if (exibir) encontrados++;
    });

    if (encontrados === 0) {
        areaContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
}

function removerFiltro() {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    renderCards(estabelecimentos);
}

function btnn(acao) {
    if (acao === "Filtrar") {
        document.querySelector(".modalf").style.display = "none";
        aplicarFiltro();
    } else if (acao === "removefiltro") {
        removerFiltro();
    } else if (acao === "CIDADE") {
        document.querySelector(".modalf").style.display = "flex";
    }
}

function formatImage(url) {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
}

// Inicializa
fetchEstabelecimentos();



