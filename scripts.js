// get our elements
const   player = document.querySelector('.player'),
        video = player.querySelector('.viewer'),
        progress = player.querySelector('.progress'),
        progressBar = player.querySelector('.progess__filled'),
        toggle = player.querySelector('.toggle'),
        skipButtons = player.querySelectorAll('[data-skip]'),
        ranges = player.querySelectorAll('.player__slider');


// build out functions
const togglePlay = () => {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

const updateButton = () => {
    const icon = video.paused ? '>' : '||';
    toggle.textContent = icon;
};

function skip() {
    // console.log(this.dataset.skip);
    // dataset 
    video.currentTime += parseFloat(this.dataset.skip);
};


// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));