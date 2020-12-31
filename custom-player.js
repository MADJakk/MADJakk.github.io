<!DOCTYPE html>
<html lang="en-gb">
<head>

<meta charset="utf-8">

  <title>My Blog</title>
<link rel="stylesheet" type="text/
css" href="style.css">
</head>
  <body>

  const media = document.querySelector('video');
  const controls = document.querySelector('.controls');

  const play = document.querySelector('.play');
  const stop = document.querySelector('.stop');
  const rwd = document.querySelector('.rwd');
  const fwd = document.querySelector('.fwd');

  const timerWrapper = document.querySelector('.timer');
  const timer = document.querySelector('.timer span');
  const timerBar = document.querySelector('.timer div');


  play.addEventListener('click', playPauseMedia);

  function playPauseMedia() {rwd.classList.remove('active');
fwd.classList.remove('active');
clearInterval(intervalRwd);
clearInterval(intervalFwd);
  if(media.paused) {
    play.setAttribute('data-icon','u');
    media.play();
  } else {
    play.setAttribute('data-icon','P');
    media.pause();
  }
}

stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon','P');
  rwd.classList.remove('active');
fwd.classList.remove('active');
clearInterval(intervalRwd);
clearInterval(intervalFwd);
}

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if(media.currentTime <= 3) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if(media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

media.addEventListener('timeupdate', setTime);

function setTime() {
  let minutes = Math.floor(media.currentTime / 60);
  let seconds = Math.floor(media.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  let mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  let barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}



            <div class="player">
      <video controls="controls" width="550"  height="310">
      <source src="Got Wheels.mp4" type="video/mp4">
      <!-- fallback content here -->
    </video>
    <div class="controls">
      <button class="play" data-icon="P" aria-label="play pause toggle"></button>
      <button class="stop" data-icon="S" aria-label="stop"></button>
      <div class="timer">
        <div></div>
        <span aria-label="timer">00:00</span>
      </div>
      <button class="rwd" data-icon="B" aria-label="rewind"></button>
      <button class="fwd" data-icon="F" aria-label="fast forward"></button>
    </div>
  </div>

<div class="player">
      <video controls="controls" width="550"  height="310">
      <source src="AYFS 2017 Halloween Episode 13 Smaller.mp4" type="video/mp4">
      <!-- fallback content here -->
    </video>
    <div class="controls">
      <button class="play" data-icon="P" aria-label="play pause toggle"></button>
      <button class="stop" data-icon="S" aria-label="stop"></button>
      <div class="timer">
        <div></div>
        <span aria-label="timer">00:00</span>
      </div>
      <button class="rwd" data-icon="B" aria-label="rewind"></button>
      <button class="fwd" data-icon="F" aria-label="fast forward"></button>
    </div>
  </div>


    </div>
  </div>
  </div>
  </div>





          media.removeAttribute('controls');
          controls.style.visibility = 'visible';
    <script src="custom-player.js"></script>
</body>
    </html>
