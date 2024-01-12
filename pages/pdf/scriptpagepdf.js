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
//Instancias das classes criadas
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
