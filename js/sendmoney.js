document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('sendBtn').addEventListener('click', () => {

    const receiver =
      document.getElementById('receiver').value.trim();

    const amount =
      Number(document.getElementById('amount').value);

    if (!receiver || amount <= 0) {
      alert('Datos inválidos');
      return;
    }

    // LEEMOS SALDO CORRECTO
    const saldoActual =
      Number(localStorage.getItem('saldo')) || 0;

    if (amount > saldoActual) {
      alert('Saldo insuficiente');
      return;
    }

    const nuevoSaldo = saldoActual - amount;
    localStorage.setItem('saldo', nuevoSaldo);

    // LEEMOS TRANSACCIONES CORRECTAS
    const transacciones =
      JSON.parse(localStorage.getItem('transacciones')) || [];

    transacciones.push({
      tipo: 'Envío',
      destino: receiver,
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