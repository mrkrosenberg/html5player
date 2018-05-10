// get our elements
const   player = document.querySelector('.player'),
        video = player.querySelector('.viewer'),
        progress = player.querySelector('.progress'),
        progressBar = player.querySelector('.progress__filled'),
        toggle = player.querySelector('.toggle'),
        skipButtons = player.querySelectorAll('[data-skip]'),
        ranges = player.querySelectorAll('.player__slider');

        // add for auto playback
        // const screen = document.querySelector('.viewer').play();

let mousedown = false;

// build out functions
const togglePlay = () => {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// handles autoplay promise/rejection 
// const autoPlay = () => {
//     if(screen !== undefined) {
//        screen.then(function(){
//            console.log('playback started');
//        }).catch(function(error){
//            console.log('playback error: ', error);
//        }); 
//     };
// };

const updateButton = () => {
    const icon = video.paused ? '>' : '||';
    toggle.textContent = icon;
};

function skip() {
    // console.log(this.dataset.skip);
    // dataset accesses all data- attributes of elements
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    video[this.name] = this.value;
};

function handleProgress() {
    // update flex-basis to show progress on progress bar
    const percent = (video.currentTime / video.duration) * 100;
    // console.log(progressBar);
    progressBar.style.flexBasis = `${percent}%`;
};

function scrubVideo(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};


// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrubVideo);
progress.addEventListener('mousemove', (e) => mousedown && scrubVideo(e));
progress.addEventListener('mousedown', () => mousedown = true); 
progress.addEventListener('mouseup', () => mousedown = false); 


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

