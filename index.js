document.addEventListener("DOMContentLoaded", function() {
    const bgAudio = document.getElementById('bgAudio');
    const putarMusik = document.getElementById('putarMusik');

    toggleAudio.addEventListener('click', function() {
        if (bgAudio.paused) {
            bgAudio.play();
            toggleAudio.textContent = 'Pause Audio';
        } else {
            bgAudio.pause();
            toggleAudio.textContent = 'Play Audio';
        }
    });
});

