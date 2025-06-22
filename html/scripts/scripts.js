// Typed intro
const typed = new Typed("#typed-intro", {
  strings: [
    "Welcome, stranger!",
    "I break things. I build things. Sometimes they work.",
    "This site? It's more personal than professional — like my dotfiles.",
    "If you found this page, congratulations! You’ve officially wasted more time than most people do online.",
    "M",
    "I use Arch, btw",
    "This site looks like a mess? Perfect, you’re in the right place.",
    "Don’t worry, you’re not lost — this is exactly where the internet forgets about you.",
    "If you’re reading this, you probably should be working.",
    "Click around! We promise it won’t get any better, but at least it’s something to do.",
    "You should do something productive instead of just staying here, dude.",
    "This site was built with love, sweat, and a healthy dose of procrastination.",
    "Thanks for stopping by. Your boredom is my entertainment.",
    "Don’t worry, this page is just here to make you question your life choices.",
    "Please, take your time. It’s not like anyone else is waiting for you.",
    "Thank you, ChatGPT",
    "If you’re still here, you must really love disappointment.",
    "Feel free to pretend this site is worth your time.",
    "This is exactly what the internet was made for: wasting time.",
    "If you’re reading this, you’re either very bored or very lost.",
    "Warning: prolonged exposure to this site may cause existential dread.",
    "This page has more personality than most people you’ll meet today.",
    "You clicked. Congratulations. You’re officially part of the problem.",
    "Don’t blame me for your poor life choices.",
    "Thanks for visiting. I hope your therapist knows about this.",
    "You’ve reached the part of the site where even I stopped caring.",
    "You thought it was another message, but it was me, Dio!",
    "Not all who wander are lost, but you definitely are.",
    "I’m not ignoring you, I’m just giving you time to reflect on what you said.",
    "Keep scrolling, maybe you’ll find something interesting... or not.",
    "Some people bring happiness wherever they go; you bring it whenever you leave.",
    "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    "Your secrets are safe with me. I wasn’t even listening anyway.",
    "Just because you’re unique doesn’t mean you’re useful.",
    "Error 404: Your motivation not found.",
    "Don’t worry, you’re not stupid. You just have bad luck thinking.",
    "You’ve officially wasted more time on this site than it took to build it.",
    "Ok, you win. I ran out of ideas. You’ve seen every message in this part of the site. Are you happy with that waste of time?",
    "STUPID NIG-"

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