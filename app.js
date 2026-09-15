const WHATSAPP_NUMERO = "5500000000000"; // <-- troque pelo número real (com DDI+DDD, só números)

let produtos = [];
let categoriaAtual = "todos";

function linkWhatsappGenerico() {
  const texto = "Oi, quero fazer um pedido na Pirlimpinpins!";
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

function linkWhatsappProduto(produto) {
  const texto = `Oi! Quero pedir: ${produto.nome} (${produto.preco})`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

// Botões genéricos de "fazer pedido" (existem no header e no hero, em qualquer página)
document.querySelectorAll(".whatsapp-generic").forEach((el) => {
  el.href = linkWhatsappGenerico();
});

// Ano do rodapé (existe em todas as páginas)
const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Catálogo: só roda se a página tiver a grade de produtos (catalogo.html)
const grid = document.getElementById("grid");
if (grid) {
  async function carregarProdutos() {
    try {
      const resp = await fetch("produtos.json");
      produtos = await resp.json();
      renderizar();
    } catch (e) {
      grid.innerHTML = "<p>Não foi possível carregar o catálogo agora.</p>";
      console.error(e);
    }
  }

  function cardHTML(p) {
    const imagem = p.imagem ? `<img src="${p.imagem}" alt="${p.nome}">` : `${p.nome}`;
    const tag = p.destaque ? `<span class="destaque-tag">Destaque</span>` : "";
    return `
      <div class="card">
        <div class="card-img">${tag}${imagem}</div>
        <div class="card-body">
          <div class="card-nome">${p.nome}</div>
          <div class="card-preco">${p.preco}</div>
          <a class="card-cta" href="${linkWhatsappProduto(p)}" target="_blank" rel="noopener">Pedir no WhatsApp</a>
        </div>
      </div>`;
  }

  function renderizar() {
    const lista = produtos.filter(
      (p) => categoriaAtual === "todos" || p.categoria === categoriaAtual
    );
    grid.innerHTML = lista.map(cardHTML).join("") ||
      "<p>Nenhum produto nessa categoria ainda.</p>";
  }

  document.getElementById("tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    categoriaAtual = btn.dataset.cat;
    renderizar();
  });

  carregarProdutos();
}
