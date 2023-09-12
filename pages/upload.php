<?php
// Verifique se o formulário de upload foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Carregue as configurações do arquivo de configuração
require_once("config.php");

// Conecte-se ao banco de dados usando as variáveis de configuração
$conexao = new mysqli($hostname, $username, $password, $database);

if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}

    // Recupere os dados do formulário
    $titulo = $_POST["titulo"];
    $autor = $_POST["autor"];
    $formato = $_POST["formato"];

    // Valide o upload do arquivo
    if (isset($_FILES["arquivo"])) {
        $nomeArquivo = $_FILES["arquivo"]["name"];
        $arquivoTmp = $_FILES["arquivo"]["tmp_name"];
        $tamanhoArquivo = $_FILES["arquivo"]["size"];
        
        // Verifique se o arquivo é do formato permitido (PDF ou EPUB)
        $extensoesPermitidas = array("pdf", "epub");
        $extensaoArquivo = strtolower(pathinfo($nomeArquivo, PATHINFO_EXTENSION));
        
        if (in_array($extensaoArquivo, $extensoesPermitidas)) {
            // Mova o arquivo para o diretório de destino (certifique-se de configurar permissões adequadas)
            $caminhoDestino = "caminho/para/seu/diretorio/$nomeArquivo";
            
            if (move_uploaded_file($arquivoTmp, $caminhoDestino)) {
                // Insira os detalhes do arquivo no banco de dados
                $query = "INSERT INTO livros (titulo, autor, formato, arquivo) VALUES (?, ?, ?, ?)";
                $stmt = $conexao->prepare($query);
                $stmt->bind_param("ssss", $titulo, $autor, $formato, $nomeArquivo);
                
                if ($stmt->execute()) {
                    echo "Arquivo enviado com sucesso.";
                } else {
                    echo "Erro ao inserir registro no banco de dados: " . $stmt->error;
                }
            } else {
                echo "Erro ao mover o arquivo para o diretório de destino.";
            }
        } else {
            echo "Formato de arquivo não suportado. Apenas PDF e EPUB são permitidos.";
        }
    } else {
        echo "Nenhum arquivo foi enviado.";
    }

    $conexao->close();
} else {
    echo "O formulário não foi enviado corretamente.";
}
?>
