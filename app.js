document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const randX = Math.random();
        const randY = Math.random();
        heart.style.setProperty('--rand-x', randX);
        heart.style.setProperty('--rand-y', randY);
        heart.style.animationDelay = Math.random() * 3 + 's'; 
        heart.style.opacity = 0;
    });

    const textContainer = document.getElementById('text-content');
    textContainer.style.display = 'none'; 

    const playButton = document.getElementById('play-audio-button');
    let audioPlaying = false; 

    playButton.addEventListener('click', function () {
        if (!audioPlaying) { 
            playBackgroundAudio(); 
            startAnimation(); 
            audioPlaying = true; 
            playButton.disabled = true; 
        }
    });

    function playBackgroundAudio() {
        const audio = new Audio('0417.MP3');
        audio.play();
        audio.addEventListener('ended', function () {
            audioPlaying = false; 
            playButton.disabled = false; 
        });
    }

    function startAnimation() {
        textContainer.style.display = 'block'; 
        const words = textContainer.textContent.split(/\s+/); 
        textContainer.textContent = ''; 

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = 0; 
            textContainer.appendChild(span);

            // Thêm delay cho từng từ
            const initialDelay = 2500; 
            const delayBetweenWords = 400; 
            const totalDelay = initialDelay + (index * delayBetweenWords); 
            span.style.animationDelay = totalDelay + 'ms'; 
        });
    }
});
