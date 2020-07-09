function gameSetup(game, sketch) {
  game.scenario = new Scenario({
    background: sketch.getImage('background').loaded,
    foreground: sketch.getImage('foreground').loaded,
    speed: 10,
  });

  game.enemies = [];

  game.score = new Score();

  game.character = new Character({
    image: sketch.getImage('characterRun').loaded,
    objectWidth: 150,
    objectHeight: 222.75,
    floorGap: 30,
    spritesQuantity: 8,
    spriteLines: 8,
    spriteColumns: 1,
    axisX: 0,
    jumpLimit: 2,
  });

  const enemy = new Enemy({
    image: sketch.getImage('enemyRun').loaded,
    objectWidth: 163.1,
    objectHeight: 174,
    floorGap: 30,
    spritesQuantity: 10,
    spriteLines: 1,
    spriteColumns: 10,
    speed: 20,
    delay: 200,
  });

  const bigEnemy = new Enemy({
    image: sketch.getImage('bigEnemy').loaded,
    objectWidth: 169.75,
    objectHeight: 241,
    floorGap: 30,
    spritesQuantity: 8, //TODO review why not works with 10 sprites
    spriteLines: 2,
    spriteColumns: 4,
    speed: 20,
    delay: 1500,
  });

  const flyEnemy = new Enemy({
    image: sketch.getImage('flyEnemy').loaded,
    objectWidth: 150,
    objectHeight: 150,
    floorGap: 300,
    spritesQuantity: 3,
    spriteLines: 2,
    spriteColumns: 2,
    speed: 20,
    delay: 2500,
  });

  game.enemies.push(enemy, bigEnemy, flyEnemy);
  game.currentEnemyIndex = 0;
}