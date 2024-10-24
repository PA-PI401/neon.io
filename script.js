document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById('progress-bar');
    let progressText = document.getElementById('progress');
    let content = document.getElementById('content');

    let progress = 0;
    let interval = setInterval(function() {
        progress += 1;
        progressText.textContent = progress + '%';
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';
            content.style.display = 'block';
        }
    }, 100); // 100ms interval, total 10 seconds for 100%
});
