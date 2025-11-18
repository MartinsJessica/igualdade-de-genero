// === Gráfico de Pizza - Representatividade ===
const generoCtx = document.getElementById('chartGenero');
new Chart(generoCtx, {
  type: 'pie',
  data: {
    labels: ['Mulheres (12,3%)', 'Homens (83,3%)'],
    datasets: [{
      data: [12.3, 83.3],
      backgroundColor: ['#C77CFF', '#00B4D8'],
      hoverOffset: 10,
      borderColor: '#fff',
      borderWidth: 3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    animation: {
      animateRotate: true,
      duration: 1500,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// === Gráfico de Barras - Desigualdade Salarial ===
const salarioCtx = document.getElementById('chartSalario');
new Chart(salarioCtx, {
  type: 'bar',
  data: {
    labels: ['Mulheres', 'Homens'],
    datasets: [{
      label: 'Índice Salarial (Homens = 100)',
      data: [78, 100],
      backgroundColor: ['#F72585', '#4895EF'],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.2,
    animation: {
      duration: 1800,
      easing: 'easeInOutQuart'
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Índice Salarial' }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});