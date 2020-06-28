function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterRunImage = loadImage('images/dog/run.png');
  gameSound = loadSound('audio/game-music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterRunImage);
  frameRate(16);
  gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();
}
