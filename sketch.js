function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterRunImage = loadImage('images/dog/run.png');
  enemyRunImage = loadImage('images/cat/slide.png');
  gameSound = loadSound('audio/game-music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 10);
  character = new Character(characterRunImage);
  enemy = new Enemy(enemyRunImage);
  frameRate(16);
  // gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.attack();

  if (character.bumped(enemy)) {
    alert('bateu');
  }
}

function keyPressed() {
  if (['ArrowUp', ' '].includes(key)) {
    mousePressed();
  }
}

function mousePressed() {
  character.jump();
}
