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
//Configurando banco de dados
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
        //Fechando a conexao com o banco de dados
        db.close((err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Conexão com o banco de dados fechada.');
            }
        });
    }
    inserindo(){
        // Endpoint para inserir dados
        app.post('/inserir', (req, res) => {
            let db = new sqlite3.Database('./pdfs.db', (err) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).send('Erro ao conectar ao banco de dados');
                }
            });

            const { campo1, campo2 } = req.body; // Substitua pelos nomes dos campos do seu formulário
            const sql = `INSERT INTO tabela (campo1, campo2) VALUES (?, ?)`; // Substitua 'tabela' e os campos pelo nome da sua tabela e colunas

            db.run(sql, [campo1, campo2], (err) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).send('Erro ao inserir dados');
                } else {
                    res.send('Dados inseridos com sucesso');
                }
            });

            db.close();
        });

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    }
    atualiza(){
        //Bloco onde serão atualizados os dados
    }
    deleta(){
        //Bloco onde serão deletados os dados
    }
    monstrar(){
        app.get('/dados', (req, res) => {
            let db = new sqlite3.Database('./pdfs.db', sqlite3.OPEN_READONLY, (err) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).send('Erro ao conectar ao banco de dados');
                }
            });
        
            const sql = 'SELECT * FROM tabela'; // aqui ficará o nome da tabela
            db.all(sql, [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).send('Erro ao buscar dados');
                } else {
                    res.json(rows);
                }
            });
        
            db.close();
        });
        
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    }
}
//Instancias das classes criadas
const menubarrapdf = new menubartopdf();
const func = new Funcionalidades();
const sqlite3 = require('sqlite3').verbose();
const banco = new DatabaseConfig();
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());