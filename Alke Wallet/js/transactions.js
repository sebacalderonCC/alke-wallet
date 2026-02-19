document.addEventListener('DOMContentLoaded', () => {

  const list =
    document.getElementById('transactionsList');

  const transacciones =
    JSON.parse(localStorage.getItem('transacciones')) || [];

  if (transacciones.length === 0) {
    list.innerHTML =
      '<li class="list-group-item">Sin movimientos</li>';
    return;
  }

  transacciones.forEach(tx => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    if (tx.tipo === 'Depósito') {
      li.textContent =
        `${tx.fecha} - Depósito: $${tx.monto}`;
    } else {
      li.textContent =
        `${tx.fecha} - Envío a ${tx.destino}: $${tx.monto}`;
    }

    list.appendChild(li);
  });

});