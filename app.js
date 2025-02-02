let campoAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');

let amigosEscolhidos = [];

function adicionarAmigo() {
  let campoAdicionarAmigo = campoAmigo.value;
  if (campoAdicionarAmigo != '') {
    amigosEscolhidos.push(campoAdicionarAmigo);
    let li = document.createElement('li');
    li.textContent = campoAdicionarAmigo;
    listaAmigos.appendChild(li);
    campoAmigo.value = '';
  }
}

function sortearAmigo() {
  if (amigosEscolhidos.length < 2) {
    alert('Não é possível realizar o sorteio sem haver pelo menos dois amigos.');
    return;
  }
  amigosEscolhidos.sort(() => Math.random() - 0.5);
  let paresDeAmigos = [];
  for (let i = 0; i < amigosEscolhidos.length; i++) {
    let amigoSecreto = amigosEscolhidos[(i + 1) % amigosEscolhidos.length];
    paresDeAmigos.push(`o amigo que ${amigosEscolhidos[i]} tirou foi: ${amigoSecreto}`);
  }
  resultado.innerHTML = '';
  paresDeAmigos.forEach(par => {
    const li = document.createElement('li');
    li.textContent = par;
    resultado.appendChild(li);
  });
}