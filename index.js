document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContato');
  const button = form.querySelector('button');
  const msgFeedback = document.getElementById('msgFeedback');

  function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showMessage(message, type = 'error') {
    msgFeedback.textContent = message;
    msgFeedback.className = type;
    msgFeedback.style.opacity = '1';

    setTimeout(() => {
      msgFeedback.style.opacity = '0';
      setTimeout(() => msgFeedback.textContent = '', 400);
    }, 4000);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const mensagem = form.querySelector('textarea').value.trim();

    if (!nome || !email || !mensagem) {
      showMessage('Por favor, preencha todos os campos.', 'error');
      return;
    }

    if (!isEmailValid(email)) {
      showMessage('Por favor, insira um email válido.', 'error');
      return;
    }

    button.disabled = true;
    button.textContent = 'Enviando...';
    button.style.background = 'linear-gradient(90deg, #00ff9c, #0575e6)';

    setTimeout(() => {
      showMessage('Mensagem enviada com sucesso!', 'success');
      form.reset();
      button.disabled = false;
      button.textContent = 'Enviar';
      button.style.background = '';
    }, 1500);
  });

  const projetos = document.querySelectorAll('.projeto');

  projetos.forEach((projeto, index) => {
    projeto.style.opacity = '0';
    projeto.style.transform = 'translateY(20px)';

    setTimeout(() => {
      projeto.style.transition = 'all 0.6s ease';
      projeto.style.opacity = '1';
      projeto.style.transform = 'translateY(0)';
    }, 300 * index);
  });
});