document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("click-count");
  const button = document.getElementById("click-btn");

  let clicks = 0;

  button.addEventListener("click", () => {
    clicks++;
    counter.textContent = clicks;
  });
});