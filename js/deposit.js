document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('depositBtn');

  if (!btn) return;

  btn.addEventListener('click', () => {

    const amount = Number(document.getElementById('amount').value);

    if (amount <= 0 || isNaN(amount)) {
      alert('Ingresa un monto válido');
      return;
    }

    // Obtener saldo actual
    const saldoActual = Number(localStorage.getItem('saldo')) || 0;

    // Calcular nuevo saldo
    const nuevoSaldo = saldoActual + amount;

    // Guardar saldo actualizado
    localStorage.setItem('saldo', nuevoSaldo);

    // Obtener transacciones existentes
    const transacciones =
      JSON.parse(localStorage.getItem('transacciones')) || [];

    // Agregar nueva transacción
    transacciones.push({
      tipo: 'Depósito',
      monto: amount,
      fecha: new Date().toLocaleString('es-CL')
    });

    // Guardar transacciones actualizadas
    localStorage.setItem(
      'transacciones',
      JSON.stringify(transacciones)
    );

    // Redirigir al menú
    window.location.href = 'menu.html';
  });

});


// ---------------------
// jQuery (separado)
// ---------------------

$(document).ready(function() {

  $('#depositBtn').on('click', function() {
    $(this).addClass('btn-warning');
  });

});