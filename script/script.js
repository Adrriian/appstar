const API_URL = 'https://script.google.com/macros/s/AKfycbxHJK7noEb6epB-Cjz4Y0RCrFQBfaxIMDroiNGXtMn-7KMEW7pCqzLt1SG6WK1M7jSH-Q/exec';
const areaContainer = document.querySelector(".area");
const modal = document.querySelector(".modalc");
const containerCidades = document.querySelector('.filtro_cidade_area');
let estabelecimentos = [];

// Função para buscar dados da API
async function fetchParceiros() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API");
        }
        estabelecimentos = await response.json();
        renderParceiros(estabelecimentos);

        // Adiciona cidades automaticamente ao filtro após renderizar os parceiros
        adicionarCidadesAoFiltro(estabelecimentos);
    } catch (error) {
        console.error("Erro ao buscar dados da planilha:", error);
    }
}

// Função para adicionar cidades ao filtro
function adicionarCidadesAoFiltro(estabelecimentos) {
    const cidadesExistentes = Array.from(containerCidades.querySelectorAll("input[name='cidade']"))
        .map(input => input.value.trim().toLowerCase());

    const cidadesUnicas = [...new Set(
        estabelecimentos
            .map(item => item.cidade && item.cidade.trim())
            .filter(cidade => cidade) // remove null, undefined ou string vazia
    )];

    cidadesUnicas.forEach(cidade => {
        const cidadeNormalizada = cidade.toLowerCase();
        if (!cidadesExistentes.includes(cidadeNormalizada)) {
            const cidadeId = cidade
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, '').toLowerCase();

            const div = document.createElement('div');
            div.className = 'filtro_cidade';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'cidade';
            input.id = cidadeId;
            input.value = cidade;

            const label = document.createElement('label');
            label.htmlFor = cidadeId;
            label.textContent = cidade;

            div.appendChild(input);
            div.appendChild(label);
            containerCidades.appendChild(div);
        }
    });
}

// Função para renderizar parceiros na página
function renderParceiros(data) {
    if (!areaContainer) return;
    areaContainer.innerHTML = ""; // Limpa o conteúdo existente antes de renderizar os novos parceiros

    data.forEach(parceiro => {
        // Verifica se todos os campos obrigatórios (exceto instagram) estão preenchidos
        const camposObrigatorios = [
            parceiro.nome,
            parceiro.tipo,
            parceiro.cidade,
            parceiro.codigo,
            parceiro.imagem,
            parceiro.alt
        ];

        const dadosCompletos = camposObrigatorios.every(valor => valor && valor.trim() !== "");
        if (!dadosCompletos) return; // Ignora se algum campo obrigatório estiver vazio

        const card = document.createElement("div");
        card.className = "area_conteudo sm";
        card.setAttribute("data-info", encodeURIComponent(JSON.stringify(parceiro)));
        card.setAttribute("data-cidade", parceiro.cidade);
        card.setAttribute("data-tipo", parceiro.tipo);

        card.innerHTML = `
            <div class="area_img">
                <img src="${formatImage(parceiro.imagem)}" alt="${parceiro.alt}">
            </div>
            <div class="area_text">
                <h1 class="p">Nome: ${parceiro.nome}</h1>
                <h1 class="tiponame">Tipo: ${parceiro.tipo}</h1>
                <h1 class="cidadename">Cidade: ${parceiro.cidade}</h1>
                <h1 class="codigo">Codigo: ${parceiro.codigo}</h1>
            </div>
        `;

        card.addEventListener("click", () => abrirModal(parceiro));
        areaContainer.appendChild(card);
    });
}

// Função para abrir o modal com informações detalhadas do parceiro
function abrirModal(parceiro) {
    document.querySelector(".img_troca").src = formatImage(parceiro.imagem);
    document.querySelector(".img_troca").alt = parceiro.alt;
    document.querySelector(".name").textContent = parceiro.nome;
    document.querySelector(".rua").textContent = parceiro.endereco;
    document.querySelector(".num").textContent = parceiro.numero;
    document.querySelector(".bairro").textContent = parceiro.bairro;
    document.querySelector(".phones").textContent = parceiro.telefone;

    // Links
    const insta = document.querySelector(".links");
    const whats = document.querySelector(".links2");
    const btnContato = document.querySelector(".btnw");

    insta.href = parceiro.instagram || "#";
    insta.style.display = parceiro.instagram ? "inline-block" : "none";

    const numeroWhats = (parceiro.whats || "").replace(/\D/g, ""); // remove tudo que não for número
    whats.href = "https://wa.me/" + numeroWhats;
    btnContato.href = "https://wa.me/" + numeroWhats;

    // Descontos
    const produtos = document.querySelector(".produtos");
    produtos.innerHTML = "";

    const descontos = (parceiro.desconto || "").split(";");
    descontos.forEach(desc => {
        const li = document.createElement("li");
        li.textContent = desc.trim();
        produtos.appendChild(li);
    });

    modal.style.display = "flex";
}

// Fechar o modal
document.querySelector(".fechar_modal").addEventListener("click", () => {
    modal.style.display = "none";
});

// Função para aplicar o filtro
function aplicarFiltro() {
    const cidadeSelecionada = document.querySelector('input[name="cidade"]:checked');
    const tipoSelecionado = document.querySelector('input[name="estabelecimento"]:checked');

    const cidade = cidadeSelecionada ? cidadeSelecionada.value.toLowerCase() : null;
    const tipo = tipoSelecionado ? tipoSelecionado.value.toLowerCase() : null;

    const cards = document.querySelectorAll(".area_conteudo");
    let encontrados = 0;

    cards.forEach(card => {
        const cardCidade = card.getAttribute("data-cidade").toLowerCase();
        const cardTipo = card.getAttribute("data-tipo").toLowerCase();

        const cidadeMatch = cidade ? cidade === cardCidade : true;
        const tipoMatch = tipo ? tipo === cardTipo : true;

        if (cidadeMatch && tipoMatch) {
            card.style.display = "grid";
            encontrados++;
        } else {
            card.style.display = "none";
        }
    });

    if (encontrados === 0) {
        areaContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
}

// Função para remover o filtro
function removerFiltro() {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    renderParceiros(estabelecimentos);
}

// Função para exibir o filtro de cidade
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

// Função para formatar a URL da imagem
function formatImage(url) {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
}

// Inicia a busca pelos parceiros assim que a página for carregada
fetchParceiros();
