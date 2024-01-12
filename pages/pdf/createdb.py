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
                livros INT NOT NULL
            )
        ''')
        cursor.execute(command)
        conn.commit()

try:
    configuracao.cria_tabela()
    print("Tabela Criada")
except:
    print("Erro ao criar tabela")