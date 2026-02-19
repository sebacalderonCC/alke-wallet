document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('depositBtn');

  btn.addEventListener('click', () => {
    const amount = Number(document.getElementById('amount').value);

    if (amount <= 0) {
      alert('Ingresa un monto válido');
      return;
    }

    const saldoActual =
      Number(localStorage.getItem('saldo')) || 0;

    const nuevoSaldo = saldoActual + amount;
    localStorage.setItem('saldo', nuevoSaldo);

    const transacciones =
      JSON.parse(localStorage.getItem('transacciones')) || [];

    transacciones.push({
      tipo: 'Depósito',
      monto: amount,
      fecha: new Date().toLocaleString()
    });

    localStorage.setItem(
      'transacciones',
      JSON.stringify(transacciones)
    );

    window.location.href = 'menu.html';
  });

});