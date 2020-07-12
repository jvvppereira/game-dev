function gameSetup(game, sketch) {
  game.memoryCard = sketch.getJSON('memory-card').loaded;
  game.settings = game.memoryCard.settings;

  game.scenario = new Scenario({
    background: sketch.getImage('background-lvl-01').loaded,
    foreground: sketch.getImage('foreground-lvl-01').loaded,
    speed: 10,
  });

  game.enemies = [];

  game.score = new Score();

  game.life = new Life(sketch, {
    maxQuantity: game.settings.life.maximum,
    starts: game.settings.life.initial,
    size: { width: 50, height: 50 },
  });

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
    image: sketch.getImage('skull').loaded,
    objectWidth: 100,
    objectHeight: 100,
    floorGap: 30,
    spritesQuantity: 4,
    spriteLines: 2,
    spriteColumns: 2,
    speed: 20,
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
  });

  game.enemies.push(enemy, bigEnemy, flyEnemy);
  game.currentMapStage = 0;

  game.map = game.memoryCard.map;
}
