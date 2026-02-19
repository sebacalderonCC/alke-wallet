document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('user');
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  // Mostrar usuario
  const userNameEl = document.getElementById('userName');
  if (userNameEl) {
    userNameEl.textContent = user;
  }

  // Mostrar saldo (formateado)
  const balanceEl = document.getElementById('balance');
  const saldo = Number(localStorage.getItem('saldo')) || 0;

  if (balanceEl) {
    balanceEl.textContent = `$${saldo.toLocaleString('es-CL')}`;
  }
});