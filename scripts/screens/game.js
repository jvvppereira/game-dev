class Game {
  constructor(sketch) {
    this.sketch = sketch;
  }

  setup() {
    gameSetup(this, this.sketch);
    // this.sketch.getSound(`gameMusic`).loaded.loop(); //TODO comment, only to develop time
  }

  keyPressed(key) {
    if (['ArrowUp', 'Space'].includes(key.code)) {
      mousePressed();
    }
  }

  mousePressed() {
    this.character.jump(this.sketch);
  }

  draw() {
    this.scenario.show();
    this.scenario.move();

    this.character.show();
    this.character.applyGravity();

    this.score.show();
    this.score.addPoint();

    this.life.draw();

    const showGameOver = () => {
      const gameOverImageWidth = 200;
      image(
        getImage('gameOver').loaded,
        width / 2 - gameOverImageWidth,
        height / 3
      );
      noLoop();
    };

    const showEnemy = (enemy) => {
      enemy.show();
      enemy.attack();

      if (this.character.bumped(enemy)) {
        this.character.beInvencible();
        this.life.remove();
      }

      if (this.life.getQuantity() == 0) {
        showGameOver();
      }

      enemy.speed = parseInt(random(10, this.score.getPoints() * 0.75));
    };

    this.mapStage = this.map[this.currentMapStage];

    this.mapStage.enemies.forEach((enemy) => {
      const currentEnemy = this.enemies[enemy.enemyType];

      // let nextIndex = this.currentEnemyIndex + 1;
      // if (nextIndex > this.enemies.length - 1) nextIndex = 0;
      // const nextEnemy = this.enemies[nextIndex];

      showEnemy(currentEnemy);
      // showEnemy(nextEnemy);

      if (currentEnemy.isOnScreen()) {
        currentEnemy.showUp();
        this.currentEnemyIndex++;
        this.currentMapStage++;
        if (this.currentEnemyIndex > this.mapStage.enemies.length - 1) {
          this.currentEnemyIndex = 0;
        }
        if (this.currentMapStage > this.map.length - 1) {
          this.currentMapStage = 0;
        }
      }
    });
  }
}
