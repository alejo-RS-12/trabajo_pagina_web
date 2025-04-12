"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Se asegura de que el script se ejecute solo después de que todo el documento HTML se haya cargado y parseado, sin esperar a que se carguen hojas de estilo, imágenes y subframe
    const gifs = document.querySelectorAll('.static-gif'); // selecciona todos los elementos con la clase static-gif
    const overlayBackground = document.getElementById('overlay-background'); // Selecciona el elemento con el ID overlay-background

    const images = [
        { static: 'imgs/videos y gift/gift-estatico.png', active: 'imgs/videos y gift/gift-ejemplo.gif' },
        { static: 'imgs/videos y gift/gift-estatico.png', active: 'imgs/videos y gift/gift-ejemplo.gif' },
        { static: 'imgs/videos y gift/gift-estatico.png', active: 'imgs/videos y gift/gift-ejemplo.gif' },
        { static: 'imgs/videos y gift/gift-estatico.png', active: 'imgs/videos y gift/gift-ejemplo.gif' },
        { static: 'imgs/videos y gift/gift-estatico.png', active: 'imgs/videos y gift/gift-ejemplo.gif' }
    ]; // Es una lista de objetos que contiene las rutas de las imágenes estáticas y activas para cada GIF.

    gifs.forEach((gif, index) => { // itera sobre cada elemento gif y añade un evento click
        const staticSrc = images[index].static;
        const activeSrc = images[index].active;

        gif.addEventListener('click', function () {
            if (gif.classList.contains('active')) { // si el gif está activo
                gif.src = staticSrc; // cambia la imagen a su estado estático
                gif.classList.remove('active');
                overlayBackground.style.opacity = '0'; // hace que el overlay sea transparente y luego lo oculta
                setTimeout(() => {
                    overlayBackground.style.display = 'none';
                }, 300);
            } else {
                gifs.forEach((g, i) => { // si el gift no está activo, Resetea todos los GIFs a su estado estático
                    g.src = images[i].static;
                    g.classList.remove('active');
                });
                gif.src = activeSrc; // Cambia la imagen a su estado activo
                gif.classList.add('active'); // Añade la clase active al GIF
                overlayBackground.style.display = 'block';
                setTimeout(() => {
                    overlayBackground.style.opacity = '1';
                }, 10);
            }
        });
    });

    overlayBackground.addEventListener('click', function () { // Define qué ocurre cuando se hace click en el overlayBackground
        gifs.forEach((gif, index) => {
            gif.src = images[index].static;
            gif.classList.remove('active');
        });
        overlayBackground.style.opacity = '0';
        setTimeout(() => {
            overlayBackground.style.display = 'none'; // Hace que el overlayBackground sea transparente y luego lo oculta.
        }, 300);
    });

    // Añadir funcionalidad para los videos
    const videos = document.querySelectorAll('.video-juego');

    videos.forEach(video => {
        video.addEventListener('click', function () {
            if (!document.fullscreenElement) {
                video.requestFullscreen().then(() => {
                    video.play();
                }).catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            }
        });
    });
});
