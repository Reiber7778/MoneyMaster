const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo').value;
  const date = document.querySelector('#date').value;
  // Validar los datos

  if (!nombre || !correo || !date) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Enviar los datos a Formspree

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      alert('¡Formulario enviado exitosamente!');
      form.reset();
    })
    .catch((error) => {
      alert('¡Formulario enviado exitosamente!');
      form.reset();
    });
});
