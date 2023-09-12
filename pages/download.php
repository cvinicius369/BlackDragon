<?php
// Conecte-se ao banco de dados
$conexao = new mysqli("localhost", "usuario", "senha", "seubanco");

if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}

// Verifique se o ID do arquivo foi fornecido na consulta
if (isset($_GET["id"])) {
    $id = $_GET["id"];
    
    // Consulte o banco de dados para obter o arquivo com base no ID
    $query = "SELECT * FROM livros WHERE id = ?";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $titulo = $row["titulo"];
            $formato = $row["formato"];
            $arquivo = $row["arquivo"];
            
            // Defina cabeçalhos para forçar o download
            header("Content-Disposition: attachment; filename=\"$titulo.$formato\"");
            header("Content-Type: application/octet-stream");
            header("Content-Length: " . strlen($arquivo));
            
            // Envie o conteúdo do arquivo para o navegador
            echo $arquivo;
        } else {
            echo "Arquivo não encontrado.";
        }
    } else {
        echo "Erro ao consultar o banco de dados: " . $stmt->error;
    }
    
    $stmt->close();
} else {
    echo "ID do arquivo não fornecido.";
}

$conexao->close();
?>
