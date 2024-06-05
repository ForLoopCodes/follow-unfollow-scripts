const buttons = Array.from(
  document.getElementsByClassName("_acan _acap _acas _aj1- _ap30")
).filter(
  (button) =>
    button.textContent.toLowerCase().includes("follow") ||
    button.querySelector("*").textContent.toLowerCase().includes("follow")
);

let index = 0,
  numOfClicks = 5;

function clickButton() {
  if (index >= buttons.length || index >= numOfClicks) {
    clearInterval(interval);
    return;
  }
  buttons[index].click();
  buttons[index].style.opacity = 0.3;
  console.log("Clicked button #" + (index + 1));
  index++;
}

clickButton();
const interval = setInterval(clickButton, 5000);
