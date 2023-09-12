<?php
// Criar ou abrir o banco de dados SQLite
$db = new SQLite3('files.db');

// Criar a tabela se ela não existir
$db->exec('CREATE TABLE IF NOT EXISTS files (id INTEGER PRIMARY KEY, name TEXT, type TEXT, content BLOB)');

// Função para inserir um novo arquivo
function insertFile($name, $type, $content) {
    global $db;
    $stmt = $db->prepare('INSERT INTO files (name, type, content) VALUES (:name, :type, :content)');
    $stmt->bindValue(':name', $name, SQLITE3_TEXT);
    $stmt->bindValue(':type', $type, SQLITE3_TEXT);
    $stmt->bindValue(':content', $content, SQLITE3_BLOB);
    return $stmt->execute();
}

// Função para remover um arquivo pelo ID
function deleteFile($id) {
    global $db;
    $stmt = $db->prepare('DELETE FROM files WHERE id = :id');
    $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
    return $stmt->execute();
}

// Função para listar todos os arquivos
function getAllFiles() {
    global $db;
    $results = $db->query('SELECT * FROM files');
    $files = [];
    while ($row = $results->fetchArray()) {
        $files[] = $row;
    }
    return $files;
}

$database = new Database();
$database->insertFile($name, $type, $content);
$database->deleteFile($id);
$files = $database->getAllFiles();
?>
