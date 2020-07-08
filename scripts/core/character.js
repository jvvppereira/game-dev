class Character extends Animation {
  constructor(config) {
    super(config);
    this.jumpVelocity = 0;
    this.gravity = 5;
    this.jumpCount = 0;
    this.jumpLimit = config.jumpLimit;
  }

  jump(sketch) {
    if (this.jumpCount < this.jumpLimit) {
      sketch.getSound('jump').loaded.play();
      this.jumpVelocity = -50;
      this.jumpCount++;
    }
  }

  applyGravity() {
    this.axisY += this.jumpVelocity;
    this.jumpVelocity += this.gravity;

    if (this.axisY > this.initialAxisY) {
      this.axisY = this.initialAxisY;
      this.jumpCount = 0;
    }
  }

  bumped(enemy) {
    // to debug
    // noFill();
    // rect(this.axisX, this.axisY, this.objectWidth, this.objectHeight);
    // rect(enemy.axisX, enemy.axisY, enemy.objectWidth, enemy.objectHeight);

    const precision = 0.7;
    const bump = collideRectRect(
      this.axisX,
      this.axisY,
      this.objectWidth * precision,
      this.objectHeight * precision,
      enemy.axisX,
      enemy.axisY,
      enemy.objectWidth * precision,
      enemy.objectHeight * precision
    );

    return bump;
  }
}
