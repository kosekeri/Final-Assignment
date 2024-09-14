document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('h1');
    let size = 16;

    function animate() {
        size += 2;
        heading.style.fontSize = size + 'px';
        if (size < 50) {
            requestAnimationFrame(animate);
        }
    }

    animate();
});
