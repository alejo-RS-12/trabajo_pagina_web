document.addEventListener('DOMContentLoaded', function () {
    const touchButtons = document.querySelectorAll('.boton-touch');
    
    touchButtons.forEach(function(touchButton) {
        touchButton.addEventListener('click', function (event) {
            event.preventDefault();
            const targetUrl = touchButton.parentElement.href;
            
            document.body.classList.add('fade-out');

            setTimeout(function () {
                window.location.href = targetUrl;
            }, 1000); // Ajuste el tiempo de espera según la duración de la animación CSS
        });
    });
});
