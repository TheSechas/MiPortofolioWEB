document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio de Sergio González García listo!");

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
        navigator.clipboard.writeText(email).then(() => {
            // Mostrar el mensaje de éxito
            copyMessage.style.display = "block";
            setTimeout(() => {
                copyMessage.style.display = "none";
            }, 2000); // Ocultar el mensaje después de 2 segundos
            alert("Correo copiado al portapapeles: " + email); // Alerta adicional
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    });

    // Implementación del cambio de modo claro/oscuro
    const toggleThemeBtn = document.getElementById("toggleThemeBtn");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode"); // Alternar clase de modo claro

        // Cambiar el texto del botón según el modo
        if (document.body.classList.contains("light-mode")) {
            toggleThemeBtn.textContent = "Cambiar a modo oscuro"; // Texto para volver a oscuro
        } else {
            toggleThemeBtn.textContent = "Cambiar a modo claro"; // Texto para ir a claro
        }
    });
});
