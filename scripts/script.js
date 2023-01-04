"use strict";

let buttons = [...document.querySelectorAll(".block")];

document.addEventListener("click", (e) => {
  let buttonIndex = buttons.indexOf(e.target.closest(".block"));

  if (e.target.closest(".top") && buttonIndex > 4) {
    let pastValue = buttons[buttonIndex].childNodes[1].textContent;
    buttons[buttonIndex].childNodes[1].textContent =
      buttons[buttonIndex - 5].textContent;
    buttons[buttonIndex - 5].childNodes[1].textContent = pastValue;
    pastValue = 0;
  } else if (e.target.closest(".bottom") && buttonIndex < 20) {
    let pastValue = buttons[buttonIndex].childNodes[1].textContent;
    buttons[buttonIndex].childNodes[1].textContent =
      buttons[buttonIndex + 5].textContent;
    buttons[buttonIndex + 5].childNodes[1].textContent = pastValue;
    pastValue = 0;
  } else if (e.target.closest(".right")) {
    let pastValue = buttons[buttonIndex].childNodes[1].textContent;
    buttons[buttonIndex].childNodes[1].textContent =
      buttons[buttonIndex + 1].textContent;
    buttons[buttonIndex + 1].childNodes[1].textContent = pastValue;
    pastValue = 0;
  } else if (e.target.closest(".left")) {
    let pastValue = buttons[buttonIndex].childNodes[1].textContent;
    buttons[buttonIndex].childNodes[1].textContent =
      buttons[buttonIndex - 1].textContent;
    buttons[buttonIndex - 1].childNodes[1].textContent = pastValue;
    pastValue = 0;
  } else if (e.target.closest(".btn-reset")) {
    buttons.forEach((item, index) => {
      item.childNodes[1].textContent = index + 1;
    });
  }
});
