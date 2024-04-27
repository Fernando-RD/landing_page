// Una función en javascript muy sencilla, para que aparezca una alerta en pantalla. Primero se señala el elemento al que aplica (getElementById) y la condición (addEventListener),
// que en este caso es hacer 'click' y lanzar un evento (la alerta).
document.getElementById('Telefono').addEventListener('click', function(event) {
    event.preventDefault(); // Esto es para prevenir que abra el enlace

    alert('Lo siento, esta es una página para un proyecto ficticio y no quiero poner mi teléfono... ¡Pero me alegra saber que quieres llamarme! :)');
});