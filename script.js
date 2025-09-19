const pdf = document.getElementById("tablePDF");
const epub = document.getElementById("tableEPUB");
const apresentacao = document.getElementById("apresentacao");
const filtroTrilogia = document.getElementById("filtroTrilogia");
const filtrosDiv = document.getElementById("filtros");
let trilogiasUnicas = [];

livros = [
  /* A CANÇÃO DO SANGUE */
  {"titulo":"A Canção do Sangue", "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/ASDC_PDF/ACDS.pdf"},
  {"titulo":"O Senhor da Torre",  "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/ASDC_PDF/OSDT.pdf"},
  {"titulo":"A Rainha do Fogo",   "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/ASDC_PDF/ARDF.pdf"},
  {"titulo":"A Canção do Sangue", "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ASDC_EPUB/ACDS.epub"},
  {"titulo":"O Senhor da Torre",  "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ASDC_EPUB/OSDT.epub"},
  {"titulo":"A Rainha do Fogo",   "autor":"Anthony Ryan", "trilogia":"A Sombra do Corvo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ASDC_EPUB/ARDF.epub"},

  /* A PRINCESA DAS CINZAS */
  {"titulo":"Princesa das Cinzas", "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/APDC_PDF/PDC.pdf"},
  {"titulo":"Dama da Névoa",       "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/APDC_PDF/DDN.pdf"},
  {"titulo":"Rainha das Chamas",   "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"pdf",  "link":"./library/APDC_PDF/RDC.pdf"},
  {"titulo":"Princesa das Cinzas", "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"epub", "link":"./library/APDC_EPUB/PDC.epub"},
  {"titulo":"Dama da Névoa",       "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"epub", "link":"./library/APDC_EPUB/DDN.epub"},
  {"titulo":"Rainha das Chamas",   "autor":"Laura Sebastian", "trilogia":"A Princesa das Cinzas", "estilo":"fantasia", "tipo":"epub", "link":"./library/APDC_EPUB/RDC.epub"},

  /* AS CRONICAS DE GELO E FOGO */
  {"titulo":"A Guerra dos Tronos",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"pdf", "link":"./library/ACDGEF_PDF/AGDT.pdf"},
  {"titulo":"A Fúria dos Reis",      "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"pdf", "link":"./library/ACDGEF_PDF/AFDR.pdf"},
  {"titulo":"A Tormenta de Espadas", "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"pdf", "link":"./library/ACDGEF_PDF/ATDE.pdf"},
  {"titulo":"O Festim dos Corvos",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"pdf", "link":"./library/ACDGEF_PDF/OFDC.pdf"},
  {"titulo":"A Dança dos Dragões",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"pdf", "link":"./library/ACDGEF_PDF/ADDD.pdf"},

  {"titulo":"A Guerra dos Tronos",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ACDGEF_EPUB/AGDT.epub"},
  {"titulo":"A Fúria dos Reis",      "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ACDGEF_EPUB/AFDR.epub"},
  {"titulo":"A Tormenta de Espadas", "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ACDGEF_EPUB/ATDE.epub"},
  {"titulo":"O Festim dos Corvos",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ACDGEF_EPUB/OFDC.epub"},
  {"titulo":"A Dança dos Dragões",   "autor":"George R. R. Martin", "trilogia":"As Crônicas de Gelo e Fogo", "estilo":"fantasia", "tipo":"epub", "link":"./library/ACDGEF_EPUB/ADDD.epub"},
  
  /* OUTROS LIVROS */
  {"titulo":"Have no Mouth, And I Most Scream", "autor":"Harlan Ellison",   "trilogia":"Livros Unicos", "estilo":"ficção",       "tipo":"pdf", "link":"./library/NoTrilogy/IHNMAIMS.pdf"},
  {"titulo":"Priest",                           "autor":"Sierra Simone",    "trilogia":"Livros Unicos", "estilo":"dark-romance", "tipo":"pdf", "link":"./library/NoTrilogy/Priest.pdf"},
  {"titulo":"Manual Dev C++",                   "autor":"Nathalie Portugal","trilogia":"Livros Unicos", "estilo":"didatico",     "tipo":"pdf", "link":"./library/NoTrilogy/Manual_DEV_CPP.pdf"}
]
function showSection(element){
  const tipo = element;
  apresentacao.style.display = "none";
  pdf.style.display = "none";
  epub.style.display = "none";
  filtrosDiv.style.display = "block"; // mostra filtro

  const sectionTarget = tipo === 'pdf' ? pdf : epub;
  trilogiasUnicas = [...new Set(livros.filter(l => l.tipo === tipo).map(l => l.trilogia))];
  filtroTrilogia.innerHTML = `<option value="">Todas</option>`;
  trilogiasUnicas.forEach(tri => {
    filtroTrilogia.innerHTML += `<option value="${tri}">${tri}</option>`;
  });
  renderTabela(tipo, "");
}
function aplicarFiltro(){
  const trilogiaEscolhida = filtroTrilogia.value;
  const tipo = pdf.style.display === "block" ? "pdf" : "epub";
  renderTabela(tipo, trilogiaEscolhida);
}
function renderTabela(tipo, trilogiaFiltro){
  const sectionTarget = tipo === 'pdf' ? pdf : epub;
  const livrosFiltrados = livros
    .filter(l => l.tipo === tipo && (trilogiaFiltro === "" || l.trilogia === trilogiaFiltro))
    .sort((a,b) => a.titulo.localeCompare(b.titulo));
  let html = `
    <table>
      <thead>
          <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Trilogia</th>
              <th>Estilo</th>
              <th>Leia Agora</th>
          </tr>
      </thead>
      <tbody>
  `;
  livrosFiltrados.forEach(l => {
    html += `
      <tr>
        <td>${l.titulo}</td>
        <td>${l.autor}</td>
        <td>${l.trilogia}</td>
        <td>${l.estilo}</td>
        <td><button onclick="window.open('${l.link}','_blank')">Abrir Livro</button></td>
      </tr>`;
  });
  html += "</tbody></table>";
  sectionTarget.innerHTML = html;
  sectionTarget.style.display = "block";
}
