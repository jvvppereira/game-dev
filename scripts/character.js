class Character extends Animate {
  constructor(image) {
    super(image);
    this.axisX = 0;

    this.objectWidth = 480;
    this.objectHeight = 480;

    this.spritesQuantity = 8;
    this.spriteLines = 3;
    this.spriteColumns = 3;

    this.initialAxisY = height - this.objectHeight / 2;
    this.axisY = this.initialAxisY;

    this.jumpVelocity = 0;
    this.gravity = 5;
  }

  jump() {
    this.jumpVelocity = -50;
  }

  applyGravity() {
    this.axisY += this.jumpVelocity;
    this.jumpVelocity += this.gravity;

    if (this.axisY > this.initialAxisY) {
      this.axisY = this.initialAxisY;
    }
  }

  bumped(enemy) {
    //to debug
    noFill();
    rect(this.axisX, this.axisY, this.objectWidth, this.objectHeight);
    rect(enemy.axisX, enemy.axisY, enemy.objectWidth, enemy.objectHeight);

    const precision = 0.2;
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
