# Amigo Secreto

O projeto consiste em uma aplicação simples para realizar sorteios de amigo secreto. Permite adicionar nomes de participantes e sortear um amigo secreto para a primeira pessoa da lista.

## Como Usar

1.  **Adicionar Participantes:**
    * Abra o arquivo `index.html` em um navegador da web.
    * No campo de texto "Digite um nome", insira o nome de um participante.
    * Clique no botão "Adicionar" para adicionar o nome à lista de participantes.
    * Repita o processo para adicionar todos os participantes desejados.
2.  **Sortear Amigo Secreto:**
    * Após adicionar pelo menos dois participantes, clique no botão "Sortear amigo".
    * O nome do amigo secreto sorteado será exibido na lista "resultado".

## Arquivos do Projeto

* **`index.html`:** Estrutura da página web, incluindo formulário de entrada, lista de participantes e botão de sorteio.
* **`app.js`:** Lógica JavaScript para adicionar nomes e realizar o sorteio do amigo secreto.
* **`style.css`:** Estilos CSS para a aparência da página.
* **`assets/amigo-secreto.png`:** Imagem do banner.
* **`assets/play_circle_outline.png`:** Imagem do botão de sortear.

## Funcionalidades

* **Adicionar Participantes:** Permite adicionar nomes de participantes a uma lista.
* **Sorteio:** Sorteia um amigo secreto para a primeira pessoa da lista de participantes.
* **Exibição do Resultado:** Exibe o nome do amigo secreto sorteado na tela.
* **Validação:** Garante que pelo menos dois participantes sejam adicionados antes do sorteio.
* **Garantia de Não Auto-Sorteio:** Garante que a pessoa sorteada não tire o próprio nome.

## Estrutura do Código JavaScript (`app.js`)

* **`nomes` Array:** Armazena os nomes dos participantes.
* **`adicionarAmigo()` Function:**
    * Obtém o nome do campo de entrada.
    * Adiciona o nome ao array `nomes` e à lista de participantes na página.
    * Limpa o campo de entrada.
* **`sortearAmigo()` Function:**
    * Verifica se há pelo menos dois participantes.
    * Embaralha a lista de participantes.
    * Seleciona a primeira pessoa da lista embaralhada.
    * Sorteia um amigo secreto para essa pessoa, garantindo que não seja ela mesma.
    * Exibe o nome do amigo secreto sorteado na lista de resultados.

## Dependências

* Nenhuma dependência externa é necessária.

## Notas
LINK NO VERCEL: https://jogo-do-amigo-secreto-rust.vercel.app/

* Este projeto foi desenvolvido para fins de demonstração e pode ser expandido com funcionalidades adicionais, como envio de resultados por e-mail ou sorteio para todos os participantes.
* As imagens utilizadas estão na pasta `assets`.
* O estilo da página é definido no arquivo `style.css`.

