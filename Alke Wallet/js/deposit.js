document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('depositBtn');

  btn.addEventListener('click', () => {
    const amount = Number(document.getElementById('amount').value);

    if (amount <= 0) {
      alert('Ingresa un monto válido');
      return;
    }

   const currentBalance = Number(localStorage.getItem('saldo')) || 0;
const newBalance = currentBalance + amount;
localStorage.setItem('saldo', newBalance);

    // Guardar transacción
const transactions =
  JSON.parse(localStorage.getItem('transacciones')) || [];

transactions.push({
  tipo: 'Depósito',
  monto: amount,
  fecha: new Date().toLocaleString('es-CL')
});

localStorage.setItem('transacciones', JSON.stringify(transactions));

    alert('Depósito exitoso');
    window.location.href = 'menu.html';
  });

});