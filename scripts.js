// get our elements
const   player = document.querySelector('.player'),
        video = player.querySelector('.viewer'),
        progress = player.querySelector('.progress'),
        progressBar = player.querySelector('.progess__filled'),
        toggle = player.querySelector('.toggle'),
        skipButtons = player.querySelectorAll('[data-skip]'),
        ranges = player.querySelectorAll('.player__slider');

        // add for auto playback
        // const screen = document.querySelector('.viewer').play();



// build out functions
const togglePlay = () => {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// handles autoplay promise 
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


// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));