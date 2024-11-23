var video = document.querySelector("#player1");

// Page load
window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video.autoplay = false;
  video.loop = false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  console.log("Play Video");
  document.querySelector("#volume").textContent = `${Math.round(video.volume * 100)}%`;
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
  console.log("Pause Video");
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate -= 0.1;
  if (video.playbackRate < 0.1) {
    video.playbackRate = 0.1;
  }
  console.log("New speed: " + video.playbackRate.toFixed(2));
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate += 0.1;
  console.log("New speed: " + video.playbackRate.toFixed(2));
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 < video.duration) {
    video.currentTime += 10;
  } else {
    video.currentTime = 0;
    video.pause();
  }
  console.log("Current location: " + video.currentTime.toFixed(2));
});

// Mute
document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.textContent = video.muted ? "Unmute" : "Mute";
  console.log(video.muted ? "Muted" : "Unmuted");
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").textContent = `${this.value}%`;
  console.log("Volume: " + video.volume.toFixed(2));
});

// Styled
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
  console.log("Old School style applied");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
  console.log("Old School style removed");
});
