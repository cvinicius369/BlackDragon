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
        //Bloco onde será criado o banco de dados SQLite3 e será feita conexão
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
const banco = new DatabaseConfig();
