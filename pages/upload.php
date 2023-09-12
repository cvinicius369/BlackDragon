<?php
require_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $allowedTypes = ['application/pdf', 'application/epub+zip']; // Tipos de arquivo permitidos (PDF e EPUB)

    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $fileName = $_FILES['file']['name'];
        $fileType = $_FILES['file']['type'];
        $fileTmpName = $_FILES['file']['tmp_name'];

        if (in_array($fileType, $allowedTypes)) {
            $fileContent = file_get_contents($fileTmpName);
            
            if (insertFile($fileName, $fileType, $fileContent)) {
                header('Location: books.html'); // Redireciona de volta para a página principal
            } else {
                echo 'Erro ao inserir o arquivo no banco de dados.';
            }
        } else {
            echo 'Tipo de arquivo não suportado. Por favor, envie um arquivo PDF ou EPUB.';
        }
    } else {
        echo 'Erro ao fazer o upload do arquivo.';
    }
} else {
    echo 'Acesso inválido.';
}
?>
