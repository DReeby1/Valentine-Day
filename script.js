// RUNAWAY BUTTON
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// CAROUSEL
const images = [
  "images/Picture1.jpeg",
  "images/Picture5.jpeg",
  "images/Picture3.jpeg",
  "images/Picture4.jpeg",
];
let index = 0;

const carouselImg = document.getElementById("carousel-img");

document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  carouselImg.src = images[index];
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  carouselImg.src = images[index];
};

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 50,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  }));
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += 3;
    if (c.y > canvas.height) c.y = -10;
  });
}

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAY!!! 💕 I knew you'd say yes 🥰";
  createConfetti();
  setInterval(drawConfetti, 16);
});

