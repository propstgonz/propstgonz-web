// Typed intro
const typed = new Typed("#typed-intro", {
  strings: [
    "Hey, I'm Alejandro.",
    "I break things. I build things. Sometimes they work.",
    "This site? It's more personal than professional — like my dotfiles."
  ],
  typeSpeed: 40,
  backSpeed: 0,
  backDelay: 1500,
  showCursor: true,
  loop: true
});

// ASCII fish rotation
const fishFrames = [
  "   ><(((º>  ",
  "    >))º)))>",
  "     >)))º)))>",
  "    >))º)))>",
  "   ><(((º>  ",
  "   <º)))><  ",
  "  <º)))><   ",
  " <((º(((<   ",
  "   <((º(((< "
];

const fishContainer = document.getElementById("rotating-fish-container");
let currentFrame = 0;

function rotateFish() {
  fishContainer.textContent = fishFrames[currentFrame];
  currentFrame = (currentFrame + 1) % fishFrames.length;
}

rotateFish();
setInterval(rotateFish, 250);

// Modal for vision
function openVisionModal() {
  document.getElementById('visionModal').classList.remove('hidden');
}

function closeVisionModal() {
  document.getElementById('visionModal').classList.add('hidden');
}