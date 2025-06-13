document.getElementById('formularioContacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envío por defecto

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const respuesta = document.getElementById('respuesta');

  const errores = [];

  if (nombre === '') {
    errores.push('El campo nombre es obligatorio.');
  }

  if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
    errores.push('Debe ingresar un email válido.');
  }

  if (mensaje === '') {
    errores.push('Debe escribir un mensaje.');
  }

  if (errores.length > 0) {
    respuesta.innerHTML = errores.join('<br>');
    respuesta.className = 'mensaje error';
  } else {
    respuesta.innerHTML = `Gracias por su contacto, ${nombre}.<br>En breve le estaré respondiendo.`;
    respuesta.className = 'mensaje exito';

    this.reset();
  }
});
