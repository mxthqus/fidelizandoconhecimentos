const participantes = [];

document.getElementById('cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (nome && cpf) {
        participantes.push({ nome, cpf });
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        alert('Participante cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

document.getElementById('mostrar').addEventListener('click', function () {
    const lista = document.getElementById('participantes');
    lista.innerHTML = '';
    participantes.forEach(function (participante) {
        const li = document.createElement('li');
        li.textContent = `${participante.nome} - ${participante.cpf}`;
        lista.appendChild(li);
    });
})