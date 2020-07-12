class Game {
  constructor(sketch) {
    this.sketch = sketch;
  }

  setup() {
    gameSetup(this, this.sketch);
    this.sketch.getSound(`gameMusic`).loaded.loop(); //TODO comment, only to develop time
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

    const currentEnemy = this.enemies[this.currentEnemyIndex];

    let nextIndex = this.currentEnemyIndex + 1;
    if (nextIndex > this.enemies.length - 1) nextIndex = 0;
    const nextEnemy = this.enemies[nextIndex];

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

    showEnemy(currentEnemy);
    showEnemy(nextEnemy);

    if (currentEnemy.isOnScreen()) {
      this.currentEnemyIndex++;
      if (this.currentEnemyIndex > this.enemies.length - 1) {
        this.currentEnemyIndex = 0;
      }
    }
  }
}
