const fallingAudio = new Audio('./audio/FallingBehind.mp4');
const fragileAudio = new Audio('./audio/Fragile.mp4');
const iAudio = new Audio('./audio/IWishYouLove.mp4');
const valentineAudio = new Audio('./audio/Valentine.mp4');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');

const songs = [
    { ele: fallingAudio, audioName: 'Falling Behind' },
    { ele: fragileAudio, audioName: 'Fragile' },
    { ele: iAudio, audioName: 'I Wish You Love' },
    { ele: valentineAudio, audioName: 'Valentine' },
]

for(const song of songs) {
    song.ele.addEventListener('ended', ()=> {
      updateSong('next');
      playPauseSong();
    })
  }
  
  let current = 0;
  let currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
  
  playBtn.addEventListener('click',()=> {
    playPauseSong();
  })
  
  nextBtn.addEventListener('click', () => {
    updateSong('next');
    playPauseSong();
  });
  
  prevBtn.addEventListener('click', () => {
    updateSong('prev');
    playPauseSong();
  });
  
  const updateSong = (action)=> {
    currentSong.pause();
    currentSong.currentTime = 0;
  
    if(action === 'next'){
      current++;
      if(current > songs.length -1) current = 0;
    }
    if(action === 'prev'){
      current--;
      if(current < 0) current = songs.length - 1;
    }
    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
  }
  
  const playPauseSong = ()=> {
    if(currentSong.paused){
      currentSong.play();
      playPauseIcon.className = 'ph-bold ph-pause';
    }
    else {
      currentSong.pause();
      playPauseIcon.className = 'ph-bold ph-play';
    }
  }