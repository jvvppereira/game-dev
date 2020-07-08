class Game {
  constructor(sketch) {
    this.sketch = sketch;
  }

  setup() {
    gameSetup(this, this.sketch);
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

    const currentEnemy = this.enemies[this.currentEnemyIndex];
    
    let nextIndex = this.currentEnemyIndex + 1;
    if (nextIndex > this.enemies.length - 1) nextIndex = 0;
    const nextEnemy = this.enemies[nextIndex];

    const showEnemy = (enemy) => {
      enemy.show();
      enemy.attack();

      if (this.character.bumped(enemy)) {
        const gameOverImageWidth = 200;
        image(
          getImage('gameOver').loaded,
          width / 2 - gameOverImageWidth,
          height / 3
        );
        noLoop();
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
