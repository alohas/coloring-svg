"use strict";

const picker = document.querySelector("input[type=color]");

let color = false;
let userColors = ["#FFF", "#FFF", "#FFF", "#FFF"];

picker.addEventListener("input", function() {
  color = this.value;
  userColorsAdd(this.value);
});

function userColorsAdd(ccolor) {
  userColors.pop();
  userColors.unshift(`${ccolor}`);
  for (let i = 0; i < userColors.length; i++) {
    document.querySelector(`.ycolor${i}`).style.backgroundColor = userColors[i];
  }
  const userPalette = document.getElementsByClassName("yc");
  for (let item of userPalette) {
    item.addEventListener("click", e => {
      var styles = getComputedStyle(e.target);
      color = styles.backgroundColor;
    });
  }
}

const palette = document.getElementsByClassName("pc");

for (let item of palette) {
  item.addEventListener("click", e => {
    var styles = getComputedStyle(e.target);
    color = styles.backgroundColor;
  });
}

function registerColorAreas() {
  document.querySelector("#colorable").addEventListener("click", e => {
    if (color == false) {
      alert("select a color first!");
    } else {
      e.target.style.fill = color;
    }
  });
}

function loadSVG() {
  fetch("clown.svg")
    .then(e => e.text())
    .then(svg => {
      document.querySelector("div.svg").innerHTML = svg;
      registerColorAreas();
    });
}

loadSVG();
