function analisarPerfil() {
  const usuario = document.getElementById('username').value.trim();
  if (!usuario) {
    alert("Digite um @ válido!");
    return;
  }

  // Mock de dados
  const dados = {
    nome: usuario,
    seguidores: 8320,
    curtidas: 723,
    comentarios: 56,
    engajamento: "9.36%",
    horarios: "Segunda 18h, Quarta 21h, Sábado 10h",
    palavras: "vida, projeto, foco, Deus, gratidão"
  };

  // Mostrar no HTML
  document.getElementById("perfil-nome").textContent = dados.nome;
  document.getElementById("seguidores").textContent = dados.seguidores;
  document.getElementById("curtidas").textContent = dados.curtidas;
  document.getElementById("comentarios").textContent = dados.comentarios;
  document.getElementById("engajamento").textContent = dados.engajamento;
  document.getElementById("horarios").textContent = dados.horarios;
  document.getElementById("palavras").textContent = dados.palavras;

  document.getElementById("resultado").classList.remove("hidden");

  // Gráfico fake de exemplo
  const ctx = document.getElementById('graficoEngajamento').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{
        label: 'Engajamento (%)',
        data: [6, 5, 9, 7, 4, 10, 8],
        backgroundColor: '#ff0077'
      }]
    }
  });
}
