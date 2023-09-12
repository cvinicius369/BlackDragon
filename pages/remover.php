<?php
require_once("config.php");

// Conecte-se ao banco de dados usando as variáveis de configuração
$conexao = new mysqli($hostname, $username, $password, $database);

if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}

// Verifique se o ID do arquivo a ser removido foi fornecido na consulta GET
if (isset($_GET["id"])) {
    $id = $_GET["id"];
    
    // Consulte o banco de dados para obter o nome do arquivo com base no ID
    $query = "SELECT arquivo FROM livros WHERE id = ?";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $nomeArquivo = $row["arquivo"];
            
            // Exclua o arquivo físico do servidor
            if (unlink("caminho/para/seu/diretorio/$nomeArquivo")) {
                // Exclua o registro do arquivo no banco de dados
                $deleteQuery = "DELETE FROM livros WHERE id = ?";
                $deleteStmt = $conexao->prepare($deleteQuery);
                $deleteStmt->bind_param("i", $id);
                
                if ($deleteStmt->execute()) {
                    echo "Arquivo removido com sucesso.";
                } else {
                    echo "Erro ao excluir registro do banco de dados: " . $deleteStmt->error;
                }
            } else {
                echo "Erro ao excluir arquivo físico.";
            }
        } else {
            echo "Arquivo não encontrado.";
        }
    } else {
        echo "Erro ao consultar o banco de dados: " . $stmt->error;
    }
    
    $stmt->close();
} else {
    echo "ID do arquivo a ser removido não fornecido.";
}

$conexao->close();
?>
