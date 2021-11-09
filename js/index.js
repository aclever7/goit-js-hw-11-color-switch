import colors from "./colors.js";

const DELAY = 1000;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", OnBtnClickStart);

function OnBtnClickStart() {
  const intervalId = setInterval(changeColor, DELAY);
  refs.startBtn.disabled = true;

  refs.stopBtn.addEventListener("click", OnBtnClickStop);
  function OnBtnClickStop() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
  }
}

function changeColor() {
  let curentColorIndex = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[curentColorIndex];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
