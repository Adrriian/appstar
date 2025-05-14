document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLoja");
  const botao = document.getElementById("btnEnviar");
  const mensagem = document.getElementById("mensagem");
  const btnUpload = document.getElementById("btnUpload");
  const inputImagem = document.getElementById("inputImagem");
  const nomeArquivo = document.getElementById("nomeArquivo");

  if (!form || !botao || !btnUpload || !inputImagem) return;

  btnUpload.addEventListener("click", () => {
    inputImagem.click();
  });

  inputImagem.addEventListener("change", () => {
    nomeArquivo.textContent = inputImagem.files.length > 0
      ? inputImagem.files[0].name
      : 'Nenhum arquivo selecionado';
  });

  const telefoneInput = form.querySelector('input[name="telefone"]');
  telefoneInput.addEventListener("input", () => {
    telefoneInput.value = telefoneInput.value.replace(/\D/g, "");
  });

  mensagem.style.display = "none";

  botao.addEventListener("click", async (e) => {
    e.preventDefault();
    mensagem.style.display = "none";
    mensagem.textContent = "";

    let camposInvalidos = false;
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach(input => input.style.border = "");

    inputs.forEach(input => {
      const nome = input.name;
      const ignorar = ["instagram", "alt"];
      if (!ignorar.includes(nome) && !input.value.trim()) {
        if (nome === "numero") return;
        input.style.border = "2px solid red";
        camposInvalidos = true;
      }
    });

    if (!inputImagem.files.length) {
      btnUpload.style.border = "2px solid red";
      camposInvalidos = true;
    } else {
      btnUpload.style.border = "";
    }

    if (camposInvalidos) {
      mensagem.textContent = "❌ Deve preencher todos os campos obrigatórios.";
      mensagem.style.display = "block";
      return;
    }

    const formData = new FormData(form);
    const dados = {};

    formData.forEach((valor, chave) => {
      if (chave === "imagem") return;

      let texto = valor.trim();

      if (chave === "instagram") {
        dados[chave] = texto;
      } else {
        const naoCapitalizar = ["telefone", "numero"];
        if (naoCapitalizar.includes(chave)) {
          dados[chave] = texto;
        } else {
          dados[chave] = texto
            .toLowerCase()
            .split(" ")
            .map(p => p.charAt(0).toUpperCase() + p.slice(1))
            .join(" ");
        }
      }
    });

    if (!dados.numero || dados.numero === "") {
      dados.numero = "S/N";
    }

    if (dados.instagram === "") delete dados.instagram;

    dados.whats = dados.telefone;
    dados.alt = `Logo da ${dados.nome}`;

    const arquivoImagem = inputImagem.files[0];

    try {
      const imgForm = new FormData();
      imgForm.append("image", arquivoImagem);

      // Fazendo upload da imagem para o ImgBB com a chave da API fornecida
      const respostaUpload = await fetch(`https://api.imgbb.com/1/upload?key=0622c9e1bc2eaa66e70fb3c76a6c2a11`, {
        method: "POST",
        body: imgForm
      });

      const dadosImg = await respostaUpload.json();
      if (!respostaUpload.ok || !dadosImg.data?.url) {
        throw new Error("Erro ao fazer upload da imagem para o ImgBB.");
      }

      // Link da imagem obtido do ImgBB
      dados.imagem = dadosImg.data.url;

      // Envia os dados da loja para a API do Google Apps Script
      const respostaPost = await fetch("https://script.google.com/macros/s/AKfycbwiZfFqP31Z61N3cNpglvXxu0DkhuKFMHB-Y6VneDVaWwyvXoOFn8DA-nW7Z2dmBzr8Gw/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Origin": "https://your-website.com"  // Substitua pelo seu domínio real
  },
  body: JSON.stringify(dados)
});

      if (!respostaPost.ok) throw new Error("Erro ao adicionar nova loja.");

      mensagem.textContent = "✅ Loja adicionada com sucesso!";
      mensagem.style.display = "block";
      mensagem.style.color = "green";
      form.reset();
      nomeArquivo.textContent = "Nenhum arquivo selecionado";

    } catch (err) {
      console.error(err);
      mensagem.textContent = "❌ Erro ao adicionar a loja.";
      mensagem.style.display = "block";
      mensagem.style.color = "red";
    }
  });
});
