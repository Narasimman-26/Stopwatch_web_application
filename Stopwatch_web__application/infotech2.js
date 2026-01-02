let sec = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    sec++;

    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec % 3600) / 60);
    let s = sec % 60;

    document.getElementById("time").innerText =
      String(h).padStart(2, '0') + ":" +
      String(m).padStart(2, '0') + ":" +
      String(s).padStart(2, '0');
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  sec = 0;
  document.getElementById("time").innerText = "00:00:00";
}
