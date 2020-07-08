function preload() {
  preLoad(this);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  this.getSound(`gameMusic`).loaded.loop();

  game = new Game(this);
  game.setup();

  home = new Home(this);
  home.setup();

  currentScreen = 'game';

  screens = {
    game,
    home,
  };
}

function draw() {
  screens[currentScreen].draw();
}

function keyPressed(key) {
  screens[currentScreen].keyPressed(key);
}

function mousePressed() {
  screens[currentScreen].mousePressed();
}
