class menubartopdf{
    wpp(){
        window.open('wa.me/62993882350');
    }
    homepage(){
        window.open('https://cvinicius369.github.io/BlackDragon/#');
    }
    det(){
        window.open('');
    }
}
class Funcionalidades{
    pesquisas(){
        var input = document.querySelector('input');        //Criando funcao de pesquisa na tag input
        input.addEventListener('keyup', function(event) {
        var text = event.target.value;
        });
    }
}
class DatabaseConfig{
    criando_conectando(){
        // Criando o banco de dados SQLite3 e fazendo a conexão
        let db = new sqlite3.Database('./pdfs.db', (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Conectado ao banco de dados SQLite.');
            }
        });

        // Aqui você pode adicionar mais código para interagir com o banco de dados

        // Não esqueça de fechar a conexão quando terminar
        db.close((err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Conexão com o banco de dados fechada.');
            }
        });
    }
    inserindo(){
        //Bloco onde serão inseridos os dados (arquivos/links)
    }
    atualiza(){
        //Bloco onde serão atualizados os dados
    }
    deleta(){
        //Bloco onde serão deletados os dados
    }
    monstrar(){
        //Bloco onde será apresentada a tabela com os dados
    }
}
//Instancias das classes criadas
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
const sqlite3 = require('sqlite3').verbose();
const banco = new DatabaseConfig();
