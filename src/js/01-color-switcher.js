const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart(evt){
  console.log(evt.currentTarget);
  body.style.backgroundColor =  getRandomHexColor();
};

function onStop(){};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



