class Enemy extends Animate {
  constructor(image) {
    super(image);
    this.objectWidth = 163.1;
    this.objectHeight = 174;

    this.axisX = width - this.objectWidth;

    this.spritesQuantity = 10;
    this.spriteLines = 1;
    this.spriteColumns = 10;

    this.axisY = height - this.objectHeight;

    this.speed = 20;
  }

  attack() {
    this.axisX -= this.speed;
    if (this.axisX < -this.objectWidth) {
      this.axisX = width;
    }
  }
}
