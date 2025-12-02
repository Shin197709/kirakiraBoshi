
/* menú */
const nav = document.querySelector("#nav"); 
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

/* hover para los items del menú */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".nav-list a");

    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "#330303"; 
        });

        item.addEventListener("mouseout", () => {
            item.style.color = "#7a0000"; 
        });
    });
});

// slider.js

	    window.addEventListener('load', iniciar, false);

            var contador = 0;
            var obj, obj2;

            function iniciar(){
                obj = document.getElementById('slider');
                obj2 = obj.getElementsByTagName('img');
                setInterval(cambiarImg, 4000);
            }

            function cambiarManual(sentido) {
                // Ocultar imagen actual
                obj2[contador].style.opacity = 0;
                
                if (sentido == "DER") {
                    contador = (contador + 1) % obj2.length;
                } else if (sentido == "IZQ") {
                    contador = (contador - 1 + obj2.length) % obj2.length;
                }
                
                // Mostrar nueva imagen
                obj2[contador].style.opacity = 1;
                console.log('Imagen:', contador);
            }

            function cambiarImg() {
                cambiarManual("DER"); 
            }

//Mensaje

            function mostrarNotificacionHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const notificacion = document.getElementById('notificacion-hora');
    const texto = document.querySelector('.notificacion-texto');
    
    let mensaje = "";
    
    if (hora >= 5 && hora < 12) {
        mensaje = "¡Buenos días! Hoy es un hermoso día para explorar Japón";
    } else if (hora >= 12 && hora < 18) {
        mensaje = "¡Buenas tardes! Es la hora perfecta para visitar templos";
    } else if (hora >= 18 && hora < 22) {
        mensaje = "¡Buenas noches! Disfruta la magia nocturna de Japón";
    } else {
        mensaje = "¡Buenas noches! Los templos esperan tu visita mañana";
    }
    
    texto.textContent = mensaje;
    
    // Mostrar notificación
    notificacion.classList.remove('ocultar');
    notificacion.classList.add('mostrar');
    
    // Auto-cerrar después de 6 segundos
    setTimeout(() => {
        cerrarNotificacion();
    }, 5000);
}

function cerrarNotificacion() {
    const notificacion = document.getElementById('notificacion-hora');
    notificacion.classList.add('ocultar');
    notificacion.classList.remove('mostrar');
    
    setTimeout(() => {
        notificacion.classList.remove('ocultar');
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(mostrarNotificacionHora, 1000);
});



