document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = document.getElementById('user').value.trim();

    if (user === '') {
      alert('Ingrese un usuario');
      return;
    }

    // Inicializar datos base
    localStorage.setItem('user', user);

    if (!localStorage.getItem('balance')) {
      localStorage.setItem('balance', '0');
    }

    if (!localStorage.getItem('transactions')) {
      localStorage.setItem('transactions', JSON.stringify([]));
    }

    // Redirigir al menú
    window.location.href = 'menu.html';
  });
});