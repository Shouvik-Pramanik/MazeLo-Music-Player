let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songname: 'Enter Sandman - Metallica', filepath: 'Songs/1.mp3', coverpath: 'sandman.jpg'},
    { songname: 'Fade To Black - Metallica', filepath: 'Songs/2.mp3', coverpath: 'Covers/cover2.jpg' },
    { songname: 'Channa Mereya - Ae Dil Hai Mushkil', filepath: 'Songs/3.mp3', coverpath: 'Covers/cover3.jpg'},
    { songname: 'Bulleya - Ae Dil Hai Mushkil', filepath: 'Songs/4.mp3', coverpath: 'Covers/cover4.jpg'},
    { songname: 'Kabira - Yeh Jawaani Hai Deewani', filepath: 'Songs/5.mp3', coverpath: 'Covers/cover5.jpg' },
    { songname: 'Battameez Dil - Yeh Jawaani Hai Deewani', filepath: 'Songs/6.mp3', coverpath: 'Covers/cover6.jpg' },
    { songname: 'Main Tumhara - Dil Bechara', filepath: 'Songs/7.mp3', coverpath: 'Covers/cover7.jpg' },
    { songname: 'Hookah Bar - Khiladi 786', filepath: 'Songs/8.mp3', coverpath: 'Covers/cover8.jpg' },
    { songname: 'Raanjha - Shershaah', filepath: 'SongsSong9.mp3', coverpath: 'Covers/cover9.jpg' },
    { songname: 'Mann Bhareya - Shershaah', filepath: 'Songs/10.mp3', coverpath: 'Covers/cover10.jpg' },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});
//audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', (e) => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', (e) => {
    if (songIndex <=0 ) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
