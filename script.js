function updateTime() {
  document.getElementById("time").textContent = new Date().toUTCString();
}

setInterval(updateTime, 1000);
updateTime();
