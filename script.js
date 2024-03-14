let playPauseBtn = document.getElementById("playPauseBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let slider = document.querySelector("#durationSlider");
let track_image = document.querySelector("#track_image");

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let track = document.createElement("audio");

let all_Songs = [
  {
    name: "Oh Baby",
    path: "music/song1.mp3",
    img: "images/image1.jpg",
    artist:
      "Andrea Jeremiah,Bhargavi Pillai,Haricharan,Naveen,Yuvan Shankar Raja",
  },
  {
    name: "Unn Thalai Mudi",
    path: "music/song2.mp3",
    img: "images/image2.jpg",
    artist: "Karthik Nidesh Gopalan,Maya",
  },
  {
    name: "Kavidhai Iravu",
    path: "music/song3.mp3",
    img: "images/image3.jpg",
    artist: "K.S.Chithra,Karthik,Vidyasagar",
  },
];

function loadTrack(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = all_Songs[index_no].path;
  title.innerHTML = all_Songs[index_no].name;
  track_image.src = all_Songs[index_no].img;
  artist.innerHTML = all_Songs[index_no].artist;

  function reset_slider() {
    slider.value = 0;
  }
  timer = setInterval(range_slider, 1000);
  total.innerHTML = all_Songs.length;
  present.innerHTML = index_no + 1;
  track.addEventListener("click", playSong);
}

loadTrack(index_no);

function playSong() {
  track.play();
  playing_song = true;
  playPauseBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function justPlay() {
  if (playing_song == false) {
    playSong();
  } else {
    pauseSong();
  }
}

function pauseSong() {
  track.pause();
  playing_song = false;
  playPauseBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function nextSong() {
  if (index_no < all_Songs.length - 1) {
    index_no += 1;
    loadTrack(index_no);
  } else {
    index_no = 0;
  }
  loadTrack(index_no);
  track.addEventListener("click", playSong);
}

function previousSong() {
  if (index_no > 0) {
    index_no -= 1;
  } else {
    index_no = all_Songs.length - 1;
  }
  loadTrack(index_no);
  track.addEventListener("click", playSong);
}

function changeDuration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// let isPlaying = false;

// playPauseBtn.addEventListener("click", function() {
//   if (isPlaying) {
//     playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
//   } else {
//     playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
//   }
//   isPlaying = !isPlaying;
// });

// You would need to add functionality for prev and next buttons based on your playlist logic.
