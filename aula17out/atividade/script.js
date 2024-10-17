const formulario = document.getElementById('formulario');
const participantes = document.getElementById('participantes');
const enviar = document.getElementById('enviar');
const acabou = document.getElementById('acabou');

let ouvintes = [];
let palestrantes = [];
let organizadores = [];

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const categoria = document.getElementById('categoria').value;

  if (categoria === '1') {
    ouvintes.push(nome);
  } else if (categoria === '2') {
    palestrantes.push(nome);
  } else if (categoria === '3') {
    organizadores.push(nome);
  }

  // Enviar formulário
  formulario.submit();
});

document.getElementById('mostrarParticipantes').addEventListener('click', function() {
  exibirParticipantes();
});

acabou.addEventListener('click', function() {
  exibirParticipantes();
});

function exibirParticipantes() {
  participantes.innerHTML = '';

  if (ouvintes.length > 0) {
    const listaOuvintes = document.createElement('ul');
    listaOuvintes.innerHTML = '<h2>Ouvintes</h2>';
    ouvintes.forEach(ouvinte => {
      const item = document.createElement('li');
      item.textContent = ouvinte;
      listaOuvintes.appendChild(item);
    });
    participantes.appendChild(listaOuvintes);
  }

  if (palestrantes.length > 0) {
    const listaPalestrantes = document.createElement('ul');
    listaPalestrantes.innerHTML = '<h2>Palestrantes</h2>';
    palestrantes.forEach(palestrante => {
      const item = document.createElement('li');
      item.textContent = palestrante;
      listaPalestrantes.appendChild(item);
    });
    participantes.appendChild(listaPalestrantes);
  }

  if (organizadores.length > 0) {
    const listaOrganizadores = document.createElement('ul');
    listaOrganizadores.innerHTML = '<h2>Organizadores</h2>';
    organizadores.forEach(organizador => {
      const item = document.createElement('li');
      item.textContent = organizador;
      listaOrganizadores.appendChild(item);
    });
    participantes.appendChild(listaOrganizadores);
  }
}