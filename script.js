const pdf = document.getElementById("tablePDF");
const epub = document.getElementById("tableEPUB");
const apresentacao = document.getElementById("apresentacao");

// array de teste
livros = [
  {"titulo":"A canção do sangue", "autor":"Anthony Ryan", "estilo":"fantasia", "tipo":"pdf", "caminho":"/library/ACS_PDF.pdf", "link":"teste"}
]
function showSection(element){
  const tipo = element;
  apresentacao.style.display = "none";
  pdf.style.display = "none";
  epub.style.display = "none";

  const sectionTarget = tipo === 'pdf' ? pdf : epub;

  const livrosFiltrados = livros.filter(l => l.tipo === tipo)
    .sort((a,b) => a.titulo.localeCompare(b.titulo));
  let html = `
    <table>
      <thead>
          <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Estilo</th>
              <th>Leia Agora</th>
          </tr>
      </thead>
      <tbody>
  `;
  livrosFiltrados.forEach(l => {
    html += `
      <td>${l.titulo}</td>
        <td>${l.autor}</td>
        <td>${l.estilo}</td>
        <td><button onclick="window.open('${l.link}','_blank')">Abrir Livro</button></td>
      </tr>`;
  });
  html += "</tbody></table>";
  sectionTarget.innerHTML = html;
  sectionTarget.style.display = "block";
}
class Faixa_Menu {
  wpp() {
    window.open(
      "https://api.whatsapp.com/send/?phone=62993882350&text&type=phone_number&app_absent=0",
      "_blank"
    );
  }
  help() {
    window.open("./pages/help/help.html", "_blank");
  }
}
const menu = new Faixa_Menu();