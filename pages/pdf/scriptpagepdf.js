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
    criaBancoDeDados(){
        // Abre (ou cria, se não existir) um banco de dados chamado 'biblioteca'
        var request = indexedDB.open('biblioteca_pdf', 1);

        request.onerror = function(event) {
        // Trata os erros de abertura do banco de dados
        console.error('Database error: ' + event.target.errorCode);
        };

        request.onupgradeneeded = function(event) {
        // Cria um novo armazenamento de objetos (tabela) chamado 'livros', se for a primeira vez que o banco de dados está sendo aberto
        var db = event.target.result;
        var objectStore = db.createObjectStore('livros', { keyPath: 'id', autoIncrement: true });

        // Define os índices da tabela 'livros'
        objectStore.createIndex('titulo', 'titulo', { unique: false });
        objectStore.createIndex('autor', 'autor', { unique: false });
        objectStore.createIndex('trilogia', 'trilogia', {unique: false});
        objectStore.createIndex('ano', 'ano', { unique: false });

        console.log('Banco de dados e armazenamento de objetos criados com sucesso!');
        };

        request.onsuccess = function(event) {
        // Continua a trabalhar com o banco de dados após a abertura bem-sucedida
        var db = event.target.result;
        console.log('Banco de dados aberto com sucesso!');
        };

    }
    adicionarLinkArquivo(db, armazenamento, dados) {
        // Inicia uma transação de leitura/escrita no banco de dados
        var transaction = db.transaction([armazenamento], 'readwrite');
      
        // Obtém o armazenamento de objetos
        var store = transaction.objectStore(armazenamento);
      
        // Adiciona os dados ao armazenamento de objetos
        var request = store.add(dados);
      
        request.onsuccess = function(event) {
          console.log('Link/arquivo adicionado com sucesso ao banco de dados.');
        };
      
        request.onerror = function(event) {
          console.error('Erro ao adicionar link/arquivo: ', event.target.errorCode);
        };
    }

    adicionaLink(){
        var db; // Suponha que 'db' é o banco de dados IndexedDB aberto
        var dadosLink = {
        titulo: 'Exemplo de Link',
        url: 'https://exemplo.com'
        };

        // Adiciona um link ao banco de dados
        adicionarLinkArquivo(db, 'livros', dadosLink);
    }
    adicionaArquivo(){
        var dadosArquivo = {
        titulo: 'Exemplo de Arquivo',
        arquivo: 'dados do arquivo' // Aqui você pode armazenar um Blob ou um File
        };
            
        // Adiciona um arquivo ao banco de dados
        adicionarLinkArquivo(db, 'livros', dadosArquivo);
    }
    front(){
        // Inicia uma transação de leitura no banco de dados
        var transaction = db.transaction([armazenamento], 'readonly');

        // Obtém o armazenamento de objetos
        var store = transaction.objectStore(armazenamento);
    
        // Obtém todos os dados do armazenamento de objetos
        var request = store.getAll();
    
        request.onsuccess = function(event) {
        var dados = event.target.result;
        // Aqui você pode manipular o DOM para exibir os dados
        // Por exemplo, se você tem um elemento <div id="display"></div> para exibir os dados
        var displayDiv = document.getElementById('display');
        displayDiv.innerHTML = ''; // Limpa o conteúdo anterior
        dados.forEach(function(item) {
            // Cria um elemento para cada item e adiciona ao div
            var elem = document.createElement('div');
            elem.textContent = 'Título: ' + item.titulo + ', Autor: ' + item.autor + ', Ano: ' + item.ano;
            displayDiv.appendChild(elem);
        });
        };
    
        request.onerror = function(event) {
        console.error('Erro ao recuperar dados: ', event.target.errorCode);
        };
    }
    mostrafront(){
        var db; // Suponha que 'db' é o banco de dados IndexedDB aberto
        banco.front(db, 'livros');
    }
}
//Instancias das classes criadas
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
const banco = new DatabaseConfig();
//Criando banco de dados (Se não existir)
banco.criaBancoDeDados();
