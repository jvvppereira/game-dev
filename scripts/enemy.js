class Enemy extends Animate {
  constructor(image) {
    super(image);
    this.objectWidth = 480;
    this.objectHeight = 480;

    this.axisX = width - this.objectWidth;

    this.spritesQuantity = 8;
    this.spriteLines = 3;
    this.spriteColumns = 3;

    this.axisY = height - this.objectHeight / 2;

    this.speed = 20;
  }

  attack() {
    this.axisX -= this.speed;
    if (this.axisX < -this.objectWidth) {
      this.axisX = width;
    }
  }
}
