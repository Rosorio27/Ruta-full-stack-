// Toggle functionality for .enlace elements
document.querySelectorAll('.enlace h2').forEach(header => {
    header.addEventListener('click', () => {
        const enlace = header.closest('.enlace');
        enlace.classList.toggle('active');
    });
});

let currentIndex = 0;
const enlaces = document.querySelectorAll('.enlace');

function cycleEnlaces() {

    enlaces.forEach(enlace => enlace.classList.remove('active'));
    
    enlaces[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % enlaces.length;
}

setInterval(cycleEnlaces, 5000);
