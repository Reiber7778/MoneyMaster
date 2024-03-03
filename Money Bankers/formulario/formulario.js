const usuarios = ["Reiber3423", "caralfredos", "usuario3","Baltaxar18"];
const contraseñas = ["Reiberjosue123", "Romas2525", "contraseña3","baltaxar.15"];

function iniciarSesion(event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById("nombre").value;
    const contraseña = document.getElementById("date").value;

    const indiceUsuario = usuarios.indexOf(nombreUsuario);

    if (indiceUsuario === -1) {
        alert("El nombre de usuario no existe");
        return;
    }

    if (contraseñas[indiceUsuario] !== contraseña) {
        alert("La contraseña  o el Usuario es Incorrecta");
      return;
    }

    window.location.href ="/principal/principal.html";
}

