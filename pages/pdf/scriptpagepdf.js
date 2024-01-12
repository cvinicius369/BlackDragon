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
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
