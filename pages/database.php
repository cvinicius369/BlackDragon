<?php
class Database {
    private $db;

    public function __construct($databaseName = 'files.db') {
        $this->db = new SQLite3($databaseName);
        $this->createTable();
    }

    private function createTable() {
        $query = "CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY,
            name TEXT,
            type TEXT,
            content BLOB
        )";
        $this->db->exec($query);
    }

    public function insertFile($name, $type, $content) {
        $stmt = $this->db->prepare("INSERT INTO files (name, type, content) VALUES (:name, :type, :content)");
        $stmt->bindValue(':name', $name, SQLITE3_TEXT);
        $stmt->bindValue(':type', $type, SQLITE3_TEXT);
        $stmt->bindValue(':content', $content, SQLITE3_BLOB);
        return $stmt->execute();
    }

    public function deleteFile($id) {
        $stmt = $this->db->prepare("DELETE FROM files WHERE id = :id");
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        return $stmt->execute();
    }

    public function getAllFiles() {
        $results = $this->db->query("SELECT * FROM files");
        $files = [];
        while ($row = $results->fetchArray()) {
            $files[] = $row;
        }
        return $files;
    }
}
?>
