# Site Pirlimpinpins

Site estático (HTML/CSS/JS puro) pronto para publicar no GitHub Pages.

## Antes de publicar

1. **Troque o número de WhatsApp** em `app.js`, linha 1:
   ```js
   const WHATSAPP_NUMERO = "5500000000000";
   ```
   Use o formato: código do país + DDD + número, só dígitos (ex: `5511999998888`).

2. **Adicione fotos reais dos produtos** (opcional, mas recomendado):
   - Crie uma pasta `assets/` e coloque as fotos lá (ex: `assets/botton-01.jpg`).
   - Em `produtos.json`, preencha o campo `"imagem"` de cada produto com o caminho, ex: `"assets/botton-01.jpg"`.
   - Sem foto, o card mostra um fundo colorido com o nome do produto (funciona como placeholder).

## Como atualizar o catálogo depois

Edite só o arquivo **produtos.json** — não precisa mexer no HTML/CSS. Cada produto segue este formato:

```json
{
  "id": "botton-03",
  "categoria": "bottons",
  "nome": "Botton Novo Modelo",
  "preco": "R$ 6,00",
  "imagem": "assets/botton-03.jpg",
  "destaque": false
}
```

- `categoria` deve ser `bottons`, `imas` ou `impressoes` (para aparecer nos filtros).
- `destaque: true` mostra uma etiqueta "Destaque" no card.
- Para remover um produto, apague o bloco correspondente do JSON.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `pirlimpinpins-site`).
2. Suba todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve — em alguns minutos o site estará em `https://SEU-USUARIO.github.io/pirlimpinpins-site/`.

## Google Ads

- A página `privacidade.html` já está incluída (exigida para aprovação de anúncios).
- Depois de publicar, adicione a tag de conversão/remarketing do Google Ads antes do `</head>` em `index.html`.
- Use a URL final do GitHub Pages como destino dos seus anúncios.
