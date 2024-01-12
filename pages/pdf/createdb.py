import sqlite3 as sql

try:
    conn = sql.connect("DataBank1.db")
    cursor = conn.cursor()
    print("Conexão realizada com sucesso!")
except:
    print("Conexão falhou!")

class configuracao:
    def cria_tabela():
        command = ('''
            CREATE TABLE IF NOT EXISTS pdfs (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                trilogia VARCHAR(100) NOT NULL,
                autor VARCHAR(100),
                livros INT NOT NULL,
                hyperlink VARHCAR(500)
            )
        ''')
        cursor.execute(command)
        conn.commit()
    def inserir_dados():
        trilogia = input("Nome da trilogia: ")
        autor = input("Nome do autor: ")
        livros = input("Quantidade de livros: ")
        hyperlink = input("Link da trilogia: ")

        command = (f'''
            INSERT INTO pdfs (id, trilogia, autor, livros, hyperlink)
            VALUES (0, "{trilogia}", "{autor}", "{livros}", "{hyperlink}")
        ''')
        cursor.execute(command)
        conn.commit()

try:
    configuracao.cria_tabela()
    print("Tabela Criada")
except:
    print("Erro ao criar tabela")

acesso = int(input("Digite o codigo de acesso para inserir dados: "))

if (acesso == 369):
    try:
        configuracao.inserir_dados()
        print("Dados inseridos com sucesso")
    except:
        print("Erro ao inserir os dados!")