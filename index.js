let secondsElpsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const mints = Math.floor(secondsElpsed / 60);
  const secnds = secondsElpsed % 60;

  time.innerHTML = `${padStart(mints)}:${padStart(secnds)}`;
}

function timer() {
  secondsElpsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElpsed = 0;
  setTime();
}
