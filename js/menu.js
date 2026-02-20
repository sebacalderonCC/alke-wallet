document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('user');

  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  const userNameEl = document.getElementById('userName');
  if (userNameEl) {
    userNameEl.textContent = user;
  }

  const balanceEl = document.getElementById('balance');
  const saldo = Number(localStorage.getItem('saldo')) || 0;

  if (balanceEl) {
    balanceEl.textContent = `$${saldo.toLocaleString('es-CL')}`;
  }
});

$(document).ready(function() {
  $('.card').hide().fadeIn(800);

  $('.btn').hover(
    function() {
      $(this).addClass('shadow');
    },
    function() {
      $(this).removeClass('shadow');
    }
  );
});