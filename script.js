// Optional JavaScript for pause functionality
document.addEventListener('DOMContentLoaded', function() {
    const creditsContent = document.querySelector('.credits-content');
    let isPaused = false;
    
    document.addEventListener('click', function() {
        if (isPaused) {
            creditsContent.style.animationPlayState = 'running';
        } else {
            creditsContent.style.animationPlayState = 'paused';
        }
        isPaused = !isPaused;
    });
});
