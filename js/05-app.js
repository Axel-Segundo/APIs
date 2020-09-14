document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para reproducir videos');
    } else {
        console.log('Pausar video');
    }
})