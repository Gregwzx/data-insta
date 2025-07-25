let chart;

const dadosFake = () => ({
  labels: ['Likes', 'Comentários', 'Alcance', 'Salvos', 'Compartilhamentos'],
  datasets: [{
    label: 'Métricas (fake)',
    data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000)),
    backgroundColor: ['#a855f7', '#9333ea', '#6b21a8', '#c084fc', '#d8b4fe'],
    borderColor: '#ffffff',
    borderWidth: 1
  }]
});

function criarGrafico(tipo = 'bar') {
  const ctx = document.getElementById('meuGrafico').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: tipo,
    data: dadosFake(),
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: 'white' }
        }
      },
      scales: tipo !== 'pie' ? {
        y: {
          beginAtZero: true,
          ticks: { color: 'white' }
        },
        x: {
          ticks: { color: 'white' }
        }
      } : {}
    }
  });
}

document.getElementById('analisarBtn').addEventListener('click', () => {
  document.getElementById('graficoSection').style.display = 'block';
  criarGrafico('bar');
});

function atualizarGrafico(tipo) {
  criarGrafico(tipo);
}
