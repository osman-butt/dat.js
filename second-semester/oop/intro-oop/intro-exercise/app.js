const spaceship = {
  xpos: 100,
  ypos: 100,
  shots: 10,
};

console.log(spaceship);

function moveLeft() {
  spaceship.xpos--;
}

const enemy = {
  xpos: 100,
  ypos: 100,
};

function moveLeft() {
  this.xpos--;
}
