$(document).ready(function() {

  // =========================
  // LISTA DE CONTACTOS
  // =========================
  const contactos = [
    'Juan Pérez',
    'María González',
    'Carlos Soto',
    'Ana Rojas'
  ];

  function mostrarContactos(filtro = '') {
    $('#listaContactos').empty();

    contactos
      .filter(c => c.toLowerCase().includes(filtro.toLowerCase()))
      .forEach(c => {
        $('#listaContactos').append(
          `<li class="list-group-item contacto-item">${c}</li>`
        );
      });
  }

  mostrarContactos();

  $('#buscarContacto').on('keyup', function() {
    mostrarContactos($(this).val());
  });

  $(document).on('click', '.contacto-item', function() {
    $('#buscarContacto').val($(this).text());
    $('#listaContactos').empty();
  });


  // =========================
  // ENVÍO DE DINERO
  // =========================
  $('#sendBtn').on('click', function() {

    const destinatario = $('#buscarContacto').val();
    const monto = Number($('#amount').val());

    if (!destinatario) {
      alert('Seleccione un destinatario');
      return;
    }

    if (!monto || monto <= 0) {
      alert('Ingrese un monto válido');
      return;
    }

    const saldoActual = Number(localStorage.getItem('saldo')) || 0;

    if (monto > saldoActual) {
      alert('Fondos insuficientes');
      return;
    }

    const nuevoSaldo = saldoActual - monto;
    localStorage.setItem('saldo', nuevoSaldo);

    const transacciones =
      JSON.parse(localStorage.getItem('transacciones')) || [];

    transacciones.push({
      tipo: 'Envío',
      monto: monto,
      destinatario: destinatario,
      fecha: new Date().toLocaleString('es-CL')
    });

    localStorage.setItem(
      'transacciones',
      JSON.stringify(transacciones)
    );

    alert('Transferencia realizada con éxito');
    window.location.href = 'menu.html';
  });

});