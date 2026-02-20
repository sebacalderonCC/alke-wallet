$(document).ready(function() {
    // ===============================
    // 1️⃣ Validar usuario
    // ===============================
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // ===============================
    // 2️⃣ Mostrar nombre de usuario
    // ===============================
    $("#userName").hide().text(user).fadeIn(600);

    // ===============================
    // 3️⃣ Mostrar saldo
    // ===============================
    const saldo = Number(localStorage.getItem('saldo')) || 0;
    $("#balance").hide().text(`$${saldo.toLocaleString('es-CL')}`).fadeIn(600);

    // ===============================
    // 4️⃣ Animar tarjeta
    // ===============================
    $(".card").hide().delay(200).fadeIn(600);

    // ===============================
    // 5️⃣ Animar botones de acción
    // ===============================
    $("a.btn").hide().each(function(index) {
        $(this).delay(400 + 200 * index).fadeIn(600);
    });

    // ===============================
    // 6️⃣ Hover animado de botones y tarjetas
    // ===============================
    $(".card, .btn").hover(
        function() {
            $(this).addClass('shadow').css('transform','translateY(-3px)');
        },
        function() {
            $(this).removeClass('shadow').css('transform','translateY(0)');
        }
    );

    // ===============================
    // 7️⃣ Función para mostrar mensajes emergentes
    // ===============================
    function showMessage(text, type = 'info') {
        const color = type === 'success' ? '#198754' :
                      type === 'error' ? '#dc3545' : '#0d6efd';

        const msg = $(`<div class="message">${text}</div>`);
        $('body').append(msg);

        msg.css({
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'background-color': color,
            'color': 'white',
            'padding': '10px 20px',
            'border-radius': '5px',
            'z-index': 1000,
            'display': 'none'
        });

        msg.fadeIn(400).delay(1500).fadeOut(400, function() {
            $(this).remove();
        });
    }

    // Ejemplo de uso:
    // showMessage("Bienvenido a Alke Wallet!", "success");
});