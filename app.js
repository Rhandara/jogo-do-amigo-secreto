// app.js

const nomes = [];

function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome) {
    nomes.push(nome);
    const listaAmigos = document.getElementById("listaAmigos");
    const novoItem = document.createElement("li");
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
    nomeInput.value = "";
  }
}

function sortearAmigo() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  const nomesEmbaralhados = [...nomes].sort(() => Math.random() - 0.5);
  const resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = ""; // Limpa resultados anteriores

  const pessoaSorteada = nomesEmbaralhados[0]; // Pega a primeira pessoa da lista embaralhada
  let amigoSecreto;

  // Garante que a pessoa não tire ela mesma
  do {
    const indiceSorteado = Math.floor(Math.random() * nomesEmbaralhados.length);
    amigoSecreto = nomesEmbaralhados[indiceSorteado];
  } while (amigoSecreto === pessoaSorteada);

  const itemResultado = document.createElement("li");
  itemResultado.textContent = `${amigoSecreto}`; // Mostra apenas o amigo secreto
  resultadoLista.appendChild(itemResultado);
}