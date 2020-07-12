function preload() {
  preLoad(this);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);

  const buttonWidth = 126;

  const button = new Button('Start', {
    x: width / 2 - buttonWidth / 2,
    y: (height / 7) * 5,
  });

  const game = new Game(this);
  game.setup();

  const home = new Home(this, button);

  // currentScreen = 'home';
  currentScreen = 'game'; //TODO comment, only to develop time

  screens = {
    game,
    home,
  };
}

function changeScreen(newScreen) {
  currentScreen = newScreen;
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
