class Character extends Animate {
  constructor(image) {
    super(image);
    this.axisX = 0;

    this.objectWidth = 150;
    this.objectHeight = 222.75;

    this.spritesQuantity = 8;
    this.spriteLines = 8;
    this.spriteColumns = 1;

    this.initialAxisY = height - this.objectHeight;
    this.axisY = this.initialAxisY;

    this.jumpVelocity = 0;
    this.gravity = 5;

    this.jumpCount = 0;
  }

  jump() {
    if (this.jumpCount < 2) {
      jumpSound.play();
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
