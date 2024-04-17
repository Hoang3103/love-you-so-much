document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const randX = Math.random();
        const randY = Math.random();
        heart.style.setProperty('--rand-x', randX);
        heart.style.setProperty('--rand-y', randY);
        heart.style.animationDelay = Math.random() * 3 + 's'; // Tạo delay ngẫu nhiên từ 0 đến 3s
        heart.style.opacity = 0;
    });

    const textContainer = document.getElementById('text-content');
    textContainer.style.display = 'none'; // Ẩn chữ khi trang được tải

    const playButton = document.getElementById('play-audio-button');
    let audioPlaying = false; // Biến để theo dõi trạng thái của âm thanh

    playButton.addEventListener('click', function () {
        if (!audioPlaying) { // Kiểm tra xem âm thanh có đang phát không
            playBackgroundAudio(); // Phát âm thanh
            startAnimation(); // Bắt đầu hiệu ứng
            audioPlaying = true; // Cập nhật trạng thái của âm thanh
            playButton.disabled = true; // Vô hiệu hóa nút
        }
    });

    function playBackgroundAudio() {
        const audio = new Audio('0417.MP3');
        audio.play();
        audio.addEventListener('ended', function () {
            audioPlaying = false; // Cập nhật trạng thái của âm thanh khi nó kết thúc
            playButton.disabled = false; // Kích hoạt lại nút sau khi âm thanh kết thúc
        });
    }

    function startAnimation() {
        textContainer.style.display = 'block'; // Hiển thị chữ khi bắt đầu phát âm thanh
        const words = textContainer.textContent.split(/\s+/); // Tách các từ
        textContainer.textContent = ''; // Xóa nội dung ban đầu

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = 0; // Ẩn từ ban đầu
            textContainer.appendChild(span);

            // Thêm delay cho từng từ
            const initialDelay = 2500; // Delay lúc bắt đầu là 2 giây
            const delayBetweenWords = 400; // Delay giữa các từ là 0.4 giây
            const totalDelay = initialDelay + (index * delayBetweenWords); // Tổng thời gian delay cho từ hiện tại
            span.style.animationDelay = totalDelay + 'ms'; // Thiết lập thời gian delay cho từng từ
        });
    }
});
