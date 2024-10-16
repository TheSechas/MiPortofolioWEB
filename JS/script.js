// Puedes agregar funcionalidades interactivas aquí si lo necesitas.
// Por ejemplo, para implementar un botón de cambio de modo oscuro/claro
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio de Sergio González García listo!");
});

document.addEventListener('DOMContentLoaded', () => {
    const email = "sergiogg20012003@gmail.com";
    
    // Botón para enviar correo con mailto
    const sendMailBtn = document.getElementById("sendMailBtn");
    sendMailBtn.addEventListener("click", () => {
        window.location.href = `mailto:${email}`;
    });

    // Botón para copiar al portapapeles
    const copyBtn = document.getElementById("copyBtn");
    const copyMessage = document.getElementById("copyMessage");

    copyBtn.addEventListener("click", () => {
        // Crear un elemento temporal de texto para copiar el correo
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Mostrar el mensaje de éxito
        copyMessage.style.display = "block";
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 2000); // Ocultar el mensaje después de 2 segundos
    });
});
