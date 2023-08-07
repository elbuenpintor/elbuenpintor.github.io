const dameNombre = document.querySelector('#name-2');
const dameDireccion= document.querySelector('#name-4');
const dameTelefono= document.querySelector('#email-2');
const dameMensaje= document.querySelector('#message-2');
const botonEnviar= document.querySelector('#sendMessageButton');

var mensaje;

function enviar() {

    mensaje = `https://api.whatsapp.com/send?phone=240222392305&text=*Nombre:*%20${dameNombre.value}%0A*Direccion:*%20${dameDireccion.value}%0A*Telefono:*%20${dameTelefono.value}%0A%0A*Mensaje:*%20${dameMensaje.value}`;
    botonEnviar.href = mensaje;

}