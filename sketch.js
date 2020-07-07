function preload() {
  backgroundImage = loadImage(
    'images/scenario/forest-01/layers/background.png'
  );
  foregroundImage = loadImage(
    'images/scenario/forest-01/layers/foreground.png'
  );
  characterRunImage = loadImage('images/dog/ltr/run.png');
  enemyRunImage = loadImage('images/cat/rtl/slide.png');
  bigEnemyImage = loadImage('images/zombie/male/rtl/walk.png');
  flyEnemyImage = loadImage('images/bat/rtl/fly.png');
  gameSound = loadSound('audio/game-music.mp3');
  jumpSound = loadSound('audio/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario({
    background: backgroundImage,
    foreground: foregroundImage,
    speed: 10,
  });

  enemies = [];

  character = new Character({
    image: characterRunImage,
    objectWidth: 150,
    objectHeight: 222.75,
    floorGap: 30,
    spritesQuantity: 8,
    spriteLines: 8,
    spriteColumns: 1,
    axisX: 0,
    jumpLimit: 2,
  });

  enemy = new Enemy({
    image: enemyRunImage,
    objectWidth: 163.1,
    objectHeight: 174,
    floorGap: 30,
    spritesQuantity: 10,
    spriteLines: 1,
    spriteColumns: 10,
    speed: 20,
    delay: 200,
  });

  bigEnemy = new Enemy({
    image: bigEnemyImage,
    objectWidth: 169.75,
    objectHeight: 241,
    floorGap: 30,
    spritesQuantity: 8, //TODO review why not works with 10 sprites
    spriteLines: 2,
    spriteColumns: 4,
    speed: 20,
    delay: 1500,
  });

  flyEnemy = new Enemy({
    image: flyEnemyImage,
    objectWidth: 150,
    objectHeight: 150,
    floorGap: 300,
    spritesQuantity: 3,
    spriteLines: 2,
    spriteColumns: 2,
    speed: 20,
    delay: 2500,
  });

  enemies.push(enemy, bigEnemy, flyEnemy);

  frameRate(20);
  // gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();
  character.applyGravity();

  enemies.forEach((enemy) => {
    enemy.show();
    enemy.attack();

    if (character.bumped(enemy)) {
      alert('bateu');
    }
  });
}

function keyPressed() {
  if (['ArrowUp', ' '].includes(key)) {
    mousePressed();
  }
}

function mousePressed() {
  character.jump();
}
