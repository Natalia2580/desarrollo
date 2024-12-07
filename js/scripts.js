// Función para navegación fluida entre secciones con animación de desplazamiento
document.querySelectorAll('.nav__links').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Animación de desplazamiento suave
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajuste para un poco de espacio en la parte superior
            behavior: 'smooth'
        });

        // Animación para resaltar el enlace actual
        document.querySelectorAll('.nav__links').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Función para el menú desplegable en dispositivos móviles con transiciones atractivas
const menuToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__link');

menuToggle.addEventListener('click', () => {
    // Transición de aparición/desaparición del menú
    navLinks.classList.toggle('nav__link--active');
    menuToggle.classList.toggle('nav__toggle--active');
    
    // Animación para cambiar el icono del menú
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-times'); // Cambia el ícono de hamburguesa a 'X'
    icon.classList.toggle('fa-bars'); // Cambia el ícono de 'X' a hamburguesa
});

// Validación del formulario de contacto con retroalimentación dinámica
const form = document.querySelector('.contact__form');
form.addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="_replyto"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Resaltar los campos vacíos con colores atractivos
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.style.display = 'none'); // Limpiar errores previos

    let isValid = true;
    
    if (name.trim() === '') {
        document.querySelector('.name-error').style.display = 'block';
        isValid = false;
    }
    
    if (email.trim() === '') {
        document.querySelector('.email-error').style.display = 'block';
        isValid = false;
    } else {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            document.querySelector('.email-invalid').style.display = 'block';
            isValid = false;
        }
    }

    if (message.trim() === '') {
        document.querySelector('.message-error').style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
        alert('Por favor, rellena correctamente todos los campos.');
    } else {
        alert('¡Mensaje enviado correctamente!');
    }
});

// Desplegar el menú en dispositivos móviles cuando el usuario haga clic en el icono del menú
menuIcon.addEventListener('click', function () {
    const nav = document.querySelector('.nav__link');
    nav.classList.toggle('nav__link--active');
    menuIcon.classList.toggle('nav__toggle--active');
});
