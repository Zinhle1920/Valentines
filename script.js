let noClicks = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const fireworks = document.getElementById("fireworks");
const mainGif = document.getElementById("mainGif");

noBtn.addEventListener("click", () => {
noClicks++;

if (noClicks === 1) {
question.innerText = "Are you sure? 🥺";
} else if (noClicks === 2) {
question.innerText = "Are you really, really sure? 😭";
} else {
question.innerText = "Okay now you're just playing 😭💔";
yesBtn.style.transform = "scale(1.3)";
}
});

yesBtn.addEventListener("click", () => {
question.innerText = "Come kiss me now!!! 💖💖💖";
mainGif.style.display = "none";
fireworks.style.display = "block";
yesBtn.style.display = "none";
noBtn.style.display = "none";
});