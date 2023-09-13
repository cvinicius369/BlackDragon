import sqlite3
from flask import Flask, render_template, request, send_from_directory
import os

app = Flask(__name__)

# Configurações
UPLOAD_FOLDER = 'uploads'
DATABASE = 'files.db'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DATABASE'] = DATABASE

def create_table():
    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY,
            name TEXT,
            type TEXT,
            content BLOB
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM files')
    files = cursor.fetchall()
    conn.close()
    return render_template('index.html', files=files)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'Nenhum arquivo enviado'
    
    file = request.files['file']

    if file.filename == '':
        return 'Nome de arquivo vazio'

    if file:
        conn = sqlite3.connect(app.config['DATABASE'])
        cursor = conn.cursor()
        cursor.execute('INSERT INTO files (name, type, content) VALUES (?, ?, ?)',
            (file.filename, file.mimetype, file.read())
        )
        conn.commit()
        conn.close()
        return 'Arquivo enviado com sucesso'

@app.route('/download/<int:file_id>')
def download(file_id):
    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM files WHERE id = ?', (file_id,))
    file = cursor.fetchone()
    conn.close()

    if file:
        filename = file[1]
        content = file[3]
        response = send_from_directory(app.config['UPLOAD_FOLDER'], filename)
        response.headers['Content-Type'] = 'application/octet-stream'
        response.headers['Content-Disposition'] = f'attachment; filename="{filename}"'
        response.data = content
        return response

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
