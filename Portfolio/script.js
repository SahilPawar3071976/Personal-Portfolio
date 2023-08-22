const dynamicText = document.getElementById('dynamicText');

const options = [
  "Web Devlopment",
  "Software Development",
  "Programming"
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const newText = options[randomIndex];
  dynamicText.textContent = `Passionate in ${newText}.`;
}

setInterval(changeText, 2000);
