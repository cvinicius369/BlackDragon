//Classe da barra de menu onde possui as funcoes principais
class menubartopdf{
    wpp(){                  //Funcao para direcionar o usuario para o whatsapp
        window.open('wa.me/62993882350');
    }
    homepage(){             //Funcao para voltar a pagina inicial
        window.open('https://cvinicius369.github.io/BlackDragon/#');
    }
    det(){
        window.open('');    //Funcao para ir para a pagina de ajudas sobre como o site funciona
    }
}
//Classe da barra de menu onde se realiza as pesquisas
class Funcionalidades{
    pesquisas(){
        var input = document.querySelector('input');        //Criando funcao de pesquisa na tag input
        input.addEventListener('keyup', function(event) {
        var text = event.target.value;
        });
    }
}
class conf_database{
    insert_in_table(){
        var db = openOrCreateDatabase("DataBank1.db", MODE_PRIVATE, null);
        var cursor = db.query("livros", null, null, null, null, null, null);

        while (cursor.moveToNext()) {
        var id = cursor.getInt(0);
        var titulo = cursor.getString(1);
        var autor = cursor.getString(2);
        var ano = cursor.getInt(3);

        console.log(id, titulo, autor, ano);
        }

        cursor.close();
        db.close();
    }
}
//Instancias das classes criadas
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
